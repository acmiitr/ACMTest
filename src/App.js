import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {HomeComponent} from './components/HomeComponent';
import {AboutComponent} from './components/AboutComponent';
import {EventComponent} from './components/EventComponent';
import {BlogComponent} from './components/BlogComponent';
import {NavComponent} from './components/NavComponent';
import {FooterComponent} from './components/FooterComponent';
import { TeamComponent } from './components/TeamComponent';
import ScrollComponent from './components/ScrollTop';
import './App.css';

function App() {
  let myRef = '';
  const scrollTop = () => {
    console.log(myRef);
    myRef.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div ref={el=> {myRef=el;}} id="acm-root">
      <NavComponent/>
      <Switch>
        <ScrollComponent scrollTop={scrollTop}>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/about" component={AboutComponent} />
          <Route exact path="/event" component={EventComponent} />
          <Route exact path="/blogs" component={BlogComponent} />
          <Route exact path="/team" component={TeamComponent} />
        </ScrollComponent>
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default App;
