import React, {Component} from 'react';

class Sidebar extends Component {

  handleRouteClick = (route) => {
    window.alert(`You have selected ${route.name}!`);
  }

  renderRoutesList = () => {
    const {routes} = this.props.app;
    return routes.map((route) => {
      return <div className="item item-styled item-clickable" key={route.id}
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
