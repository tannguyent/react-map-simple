
import * as React from 'react';

import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';


export interface MapProps {
  makers: [];
}

export interface MapState {
  readonly count: number;
}


class Map extends React.Component<MapProps, MapState> {
  readonly state: MapState = {
    count: 0,
  };
  
  public render() {
    const GoogleMapExample = withScriptjs(withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      />
    )));

    return (
      <GoogleMapExample
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXl67dCOMGCDmSVZsU2Duf4o_VrOWJUxg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
