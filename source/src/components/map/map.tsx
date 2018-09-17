
import { GoogleMap, withGoogleMap } from 'react-google-maps';

import * as React from 'react';


class Map extends React.Component {
  public render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      />
    ));

    return(
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} />  }
        />
   );
  }
}

export default Map;
