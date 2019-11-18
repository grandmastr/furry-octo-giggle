import React, { Fragment } from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

export default () => {
  return (
    <Fragment>
      <div className="home-banner">
        <div className="text-container">
          <span
            className="banner-logo-text"
            style={{ fontSize: '3.5em', fontWeight: 'bold' }}
          >
            iconic
          </span>{' '}
          <br />
          <span className="banner-medium-text">
            icons innovative community
          </span>{' '}
          <br />
          <span className="banner-small-text">
            we engage, enable and empower
          </span>
        </div>
        <div className="icon-container">
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </Fragment>
  );
};
