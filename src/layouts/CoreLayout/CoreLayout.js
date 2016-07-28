import React from 'react';
import Sidebar from 'components/Sidebar';
import Map from 'components/Map';

export const CoreLayout = () => (
    <div className="core-layout">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="map-wrapper">
        <Map />
      </div>
    </div>
);

export default CoreLayout;
