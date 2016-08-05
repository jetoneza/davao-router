import React, {Component} from 'react';
import GoogleMap from 'google-maps';

class Map extends Component {
  constructor(props) {
    super(props)
    this.map = null;
    this.google = null;
    this.mapInfo = null;
    this.markers = [];
    this.routePath = null;
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    this.loadMap();
  }

  initMap = () => {
    GoogleMap.KEY = 'AIzaSyDr8XyBDTZwhdBKTfAhoEZNN85NsLQxQxU';
    GoogleMap.LIBRARIES = ['geometry', 'places'];
    GoogleMap.SENSOR = false;
    GoogleMap.load((google) => {
      this.google = google;
      this.mapInfo = new google.maps.InfoWindow;
      this.initialize();
      this.loadMap();
    });
  }

  initialize() {
    const {mapCanvas} = this.refs;
    const Google = this.google;
    const DAVAO = {lat: 7.057180, lng: 125.599512};
    const {activeRoute} = this.props;
    let center = DAVAO;
    let zoom = 13;

    this.map = new Google.maps.Map(mapCanvas, {
      center,
      zoom,
      mapTypeControl: true,
      mapTypeControlOptions: {
        position: Google.maps.ControlPosition.TOP_RIGHT,
      },
    });
  }

  loadMap() {
    const {activeRoute} = this.props;
    if (activeRoute && activeRoute.path) {
      const center = activeRoute.center;
      const zoom = activeRoute.zoom;
      this.map.setOptions({center, zoom});
      this.setPath(activeRoute);
    } else {
      this.initialize()
    }
  }


  setPath(activeRoute) {
    const {path} = activeRoute;
    const Google = this.google;
    this.clearMap();
    this.routePath = new Google.maps.Polyline({
      path,
      geodesic: true,
      strokeColor: '#2ecc71',
      strokeOpacity: 0.7,
      strokeWeight: 3
    });

    let index = 0;
    activeRoute.markers.forEach((marker) => {
      const {lat, lng} = marker;

      let options = {
        position: {lat, lng},
        icon: {
          path: Google.maps.SymbolPath.CIRCLE,
          scale: 5,
          strokeColor: '#e74c3c',
          strokeWeight: 4,
          fillColor: '#fff',
          fillOpacity: 0.7
        },
        map: this.map,
      };

      if (index === 0) {
        // TODO: Change starting icon image
        const image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        options.animation = Google.maps.Animation.DROP;
        options.icon = image;
      }

      const mapMarker = new Google.maps.Marker(options);

      mapMarker.addListener('click', (e) => {
        this.displayMarker(e, marker);
      });

      this.markers.push(mapMarker);
      index++;
    });

    this.routePath.setMap(this.map);
  }

  clearMap() {
    this.markers.forEach((marker) => {
      marker.setMap(null);
    });
    this.markers = [];

    if (this.routePath) {
      this.routePath.setMap(null);
      this.routePath = null;
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
