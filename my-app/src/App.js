import React from 'react';
import './App.css';
import { Desk } from './components/Desk';
import { Switch, Route, Link } from 'react-router-dom';

import { HomeView } from './views/HomeView';
import { EducationView } from './views/EducationView';

const App = () => {
  return (
    <div className="App">
      <Desk>
        <Switch>
          <Route exact path='/'>
            <HomeView scale={0.35} />
          </Route>
          <Route exact path='/education'>
            <EducationView />
          </Route>
          <Route exact path='/projects'>
            <Link to='/'>GO BACK</Link>
            <h1>Projects</h1>
          </Route>
        </Switch>
      </Desk>
    </div>
  );
}

export default App;
