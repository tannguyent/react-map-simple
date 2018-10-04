
import * as React from 'react';
import { compose, withProps, withHandlers } from "recompose";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from 'react-google-maps';
import MarkerClusterer  from "react-google-maps/lib/components/addons/MarkerClusterer";
import { IGoogleMapMaker } from '../../models';

interface IMapProps {
  markers: IGoogleMapMaker[];
  onMarkerClustererClick(): void;
}

const MapComponent = compose<IMapProps, {}>(
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
          key={marker.id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);
export default MapComponent
