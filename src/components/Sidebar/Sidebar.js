import React, {Component} from 'react';

class Sidebar extends Component {

  handleRouteClick = (route) => {
    this.props.setRoute(route);
  }

  renderRoutesList = () => {
    const {routes, activeRoute} = this.props.app;
    return routes.map((route) => {
      return <div
          className={`item item-styled item-clickable ${route.id === activeRoute.id ? 'active' : ''}`}
          key={route.id}
          onClick={(e) => {this.handleRouteClick(route)}}>{route.name}</div>
    });
  }

  render() {
    return (
        <div className="sidebar">
          <div className="item item-styled item-header">Routes</div>
          <div className="item-group routes-list">
            {this.renderRoutesList()}
          </div>
        </div>
    );
  }
}

Sidebar.propTypes = {
  app: React.PropTypes.object,
};

export default Sidebar;
