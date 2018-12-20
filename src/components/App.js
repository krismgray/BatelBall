import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import HowToPlay from './HowToPlay';
import MeetTheTeam from './MeetTheTeam';
import ContactUs from './ContactUs';
import CrowdFunding from './CrowdFunding';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/HowToPlay' component={HowToPlay} />
          <Route path='/CrowdFunding' component={CrowdFunding} />
          <Route path='/ContactUs' component={ContactUs} />
          <Route path='/MeetTheTeam' component={MeetTheTeam} />
        </Switch>
      </div>
    );
  }
}

export default App;
