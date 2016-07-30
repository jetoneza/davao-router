import React, {Component} from 'react';
import GoogleMap from 'google-maps';

class Map extends Component {
  constructor(props) {
    super(props)
    this.map = null;
    this.google = null;
    this.mapInfo = null;
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    this.initMap();
  }

  initMap = () => {
    const {mapCanvas} = this.refs;
    GoogleMap.KEY = 'AIzaSyDr8XyBDTZwhdBKTfAhoEZNN85NsLQxQxU';
    GoogleMap.LIBRARIES = ['geometry', 'places'];
    GoogleMap.SENSOR = false;
    GoogleMap.load((google) => {
      this.google = google;
      this.mapInfo = new google.maps.InfoWindow;
      this.initialize(mapCanvas);
    });
  }

  initialize(mapCanvas) {
    const Google = this.google;
    const DAVAO = {lat: 7.057180, lng: 125.599512};
    const {activeRoute} = this.props;
    let center = DAVAO;
    let zoom = 13;

    if (activeRoute && activeRoute.path) {
      center = activeRoute.center;
      zoom = activeRoute.zoom;
    }

    this.map = new Google.maps.Map(mapCanvas, {
      center,
      zoom,
      mapTypeControl: true,
      mapTypeControlOptions: {
        position: Google.maps.ControlPosition.TOP_RIGHT,
      },
    });

    if (activeRoute && activeRoute.path) {
      const {path} = activeRoute;
      const routePath = new Google.maps.Polyline({
        path,
        geodesic: true,
        strokeColor: '#2ecc71',
        strokeOpacity: 0.7,
        strokeWeight: 3
      });

      activeRoute.markers.forEach((marker) => {
        const {lat, lng} = marker;
        const mapMarker = new Google.maps.Marker({
          position: {lat, lng},
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 5,
            strokeColor: '#e74c3c',
            strokeWeight: 4,
            fillColor: '#fff',
            fillOpacity: 0.7
          },
          map: this.map,
        });

        mapMarker.addListener('click', (e) => {
          this.displayMarker(e, marker);
        });
      });

      routePath.setMap(this.map);
    }
  }

  displayMarker = (e, marker) => {
    const content = `<h1 class="map-marker-desc">${marker.desc}</h1>`;

    this.mapInfo.setContent(content);
    this.mapInfo.setPosition(e.latLng);

    this.mapInfo.open(this.map);
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
