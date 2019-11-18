import React, { Fragment, useState } from 'react';

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [gallery, setGallery] = useState({});

  return (
    <Fragment>
      <div className="gallery-slider-container">
        <div className="grid-container">
          <div className="grid-box"></div>
          <div className="grid-box"></div>
          <div className="grid-box"></div>
          <div className="grid-box"></div>
          <div className="grid-box"></div>
          <div className="grid-box"></div>
          <div className="grid-box"></div>
          <div className="grid-box"></div>
        </div>
      </div>
    </Fragment>
  );
}
