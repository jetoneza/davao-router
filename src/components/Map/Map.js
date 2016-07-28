import React, {Component} from 'react';
import GoogleMap from 'google-maps';

class Map extends Component {
  constructor(props) {
    super(props)
    this.map = null;
    this.google = null;
  }

  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    const {mapCanvas} = this.refs;
    GoogleMap.KEY = 'AIzaSyDr8XyBDTZwhdBKTfAhoEZNN85NsLQxQxU';
    GoogleMap.LIBRARIES = ['geometry', 'places'];
    GoogleMap.SENSOR = false;
    GoogleMap.load((google) => {
      this.google = google;
      this.initialize(mapCanvas);
    });
  }

  initialize(mapCanvas) {
    const Google = this.google;
    const DAVAO = {lat: 7.057180, lng: 125.599512};

    const map = new Google.maps.Map(mapCanvas, {
      center: DAVAO,
      zoom: 13,
      mapTypeControl: true,
      mapTypeControlOptions: {
        position: Google.maps.ControlPosition.TOP_RIGHT,
      },
    });
  }

  render() {
    return (
        <div className="map">
          <div className="map-canvas" ref="mapCanvas"></div>
        </div>
    );
  }
}

export default Map;
