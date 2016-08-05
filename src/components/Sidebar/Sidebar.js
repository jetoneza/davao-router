import React, {Component} from 'react';

const listType = {
  LIST_TYPE_ROUTES: 'list:routes',
  LIST_TYPE_MARKERS: 'list:markers',
}

class Sidebar extends Component {

  state = {
    listType: listType.LIST_TYPE_ROUTES,
  }


  handleRouteClick = (route) => {
    this.props.setRoute(route);
    this.props.setMarker(null);
    this.setState({listType: listType.LIST_TYPE_MARKERS});
  }

  renderRoutesList = () => {
    const {routes, activeRoute} = this.props.app;
    return routes.map((route) => {
      return <div
          className={`item item-styled item-clickable ${activeRoute && route.id === activeRoute.id ? 'active' : ''}`}
          key={route.id}
          onClick={(e) => {this.handleRouteClick(route)}}>{route.name}</div>
    });
  }

  handleMarkerClick = (index) => {
    this.props.setMarker(index);
  }

  renderMarkers = () => {
    const {activeRoute, activeMarker} = this.props.app;

    if (!activeRoute || !activeRoute.markers) {
      return null;
    }

    return activeRoute.markers.map((marker, index) => {
      return <div
          className={`item item-styled item-clickable ${activeMarker === index ? 'active' : ''}`}
          key={index}
          onClick={(e) => {this.handleMarkerClick(index)}}>{marker.desc}</div>
    });
  }

  handleBackClick = () => {
    this.setState({listType: listType.LIST_TYPE_ROUTES});
  }

  render() {
    const isListRoute = this.state.listType == listType.LIST_TYPE_ROUTES;
    const list = isListRoute ? this.renderRoutesList() : this.renderMarkers();
    const backItem = isListRoute ? null : (
        <div className="item item-styled item-clickable item-styled-back"
             onClick={::this.handleBackClick}>
          <span className="glyphicon glyphicon-menu-left"></span> Back
        </div>
    );
    return (
        <div className="sidebar">
          <div className="item item-styled item-header">Davao Routes</div>
          <div className="item-group routes-list">
            {backItem}
            {list}
          </div>
        </div>
    );
  }
}

Sidebar.propTypes = {
  app: React.PropTypes.object,
};

export default Sidebar;
