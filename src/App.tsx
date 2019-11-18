import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/App.css';

import Nav from '../src/components/includes/Nav';

// pages
import Gallery from './components/pages/gallery/Gallery';
import Home from './components/pages/home/Home';
import Meet from './components/pages/meet/Meet';
import Testimonials from './components/pages/testimonials/Testimonials';

const App: React.FC = () => {
  return (
    <Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/meet">
            <Meet />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/testimonials">
            <Testimonials />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
