import React from 'react';
import Sidebar from 'components/Sidebar';
import Map from 'components/Map';

export const CoreLayout = (props) => (
    <div className="core-layout">
      <div className="map-wrapper">
        <Map activeRoute={props.app.activeRoute} activeMarker={props.app.activeMarker}/>
      </div>
      <div className="sidebar-wrapper">
        <Sidebar {...props}/>
      </div>
    </div>
);

CoreLayout.propTypes = {
  app: React.PropTypes.object,
};

export default CoreLayout;
