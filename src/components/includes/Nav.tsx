import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

export default withRouter(({ history }) => {
  const tabs = ['home', 'gallery', 'testimonials', 'meet'];
  const [activeTab, setActiveTab] = useState(
    history.location.pathname.split('/')[1] || 'home'
  );

  return (
    <nav className="nav">
      <span>ICON.I.C</span>
      <span className="nav-dash" />
      <ul>
        {tabs.map(tab => (
          <li
            className={tab === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
            key={tab}
          >
            <NavLink to={tab === 'home' ? '/' : `/${tab}/`}>{tab}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
});
