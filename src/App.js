import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {HomeComponent} from './components/HomeComponent';
import {AboutComponent} from './components/AboutComponent';
import {EventComponent} from './components/EventComponent';
import {BlogComponent} from './components/BlogComponent';
import {NavComponent} from './components/NavComponent';
import {FooterComponent} from './components/FooterComponent';
import { TeamComponent } from './components/TeamComponent';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavComponent/>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/about" component={AboutComponent} />
        <Route exact path="/event" component={EventComponent} />
        <Route exact path="/blogs" component={BlogComponent} />
        <Route exact path="/team" component={TeamComponent} />
      </Switch>
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
