
import * as React from 'react';
import { compose, withProps, withHandlers } from "recompose";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from 'react-google-maps';
import MarkerClusterer  from "react-google-maps/lib/components/addons/MarkerClusterer";

import axios from "axios"

interface IMarker {
  photo_id: string;
  latitude: number;
  longitude: number;
}

interface IMapProps {
  markers: IMarker[];
  onMarkerClustererClick(): void;
}

interface IMapState {
  markers: IMarker[];
}
const MapWithAMarkerClusterer = compose<IMapProps, IMapState>(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCXl67dCOMGCDmSVZsU2Duf4o_VrOWJUxg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer: any) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

class Map extends React.Component<{}, IMapState> {
  public componentWillMount() {
    console.log('componentWillMount')
    this.setState({ markers: [] })
  }

  public componentDidMount() {
    console.log('componentDidMount')
    const url = [
      // Length issue
      `https://gist.githubusercontent.com`,
      `/farrrr/dfda7dd7fccfec5474d3`,
      `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    ].join("")

    axios(url)
      .then((data: any) => {
        this.setState({ markers: data.data.photos });
      });
  }

  public render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} />
    );
  }
}

export default Map;
