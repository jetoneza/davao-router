import React from 'react';
import Sidebar from 'components/Sidebar';
import Map from 'components/Map';

export const CoreLayout = () => (
    <div className='container text-center'>
      <Sidebar />
      <Map />
    </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default CoreLayout;
