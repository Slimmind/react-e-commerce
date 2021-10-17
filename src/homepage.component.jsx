import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="home-page">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h2 className="title">Hats</h2>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h2 className="title">Jakets</h2>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h2 className="title">Sneakers</h2>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h2 className="title">Mens</h2>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h2 className="title">Womens</h2>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;