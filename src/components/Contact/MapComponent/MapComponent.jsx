import s from './MapComponent.module.scss'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from "react";
 
export class MapComponent extends Component {
  render() {
    console.log('props', this.props)

    return (
      <div className={s.mapComponent}>
        <Map
          google={this.props.google}
          style={{ width: '720px', height: '242px', position: 'relative' }}
          zoom={14}
          initialCenter={{
            lat: 49.432434,
            lng: 26.995615
          }}
        >
          <Marker />
        </Map>
      </div>
    );
  }
}
console.info('apikey', GoogleApiWrapper({ apiKey: 'AIzaSyDwy3yIZKy6wx7R3dZ9A9l-7KLVhnNAO6M' }))

const MapComponentWithGoogleAPI = GoogleApiWrapper({
  apiKey: 'AIzaSyDwy3yIZKy6wx7R3dZ9A9l-7KLVhnNAO6M'
})(MapComponent);
 
export default MapComponentWithGoogleAPI;