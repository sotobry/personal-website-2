import React from 'react';
import './App.css';
import { Desk } from './components/Desk';
import { Switch, Route } from 'react-router-dom';

import { HomeView } from './views/HomeView';
import { EducationView } from './views/EducationView';
import { ProjectsView } from './views/ProjectsView';
import { BlogView } from './views/BlogView';

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
            <ProjectsView scale={0.4} />
          </Route>
          <Route exact path='/blog'>
            <BlogView />
          </Route>
        </Switch>
      </Desk>
    </div>
  );
}

export default App;
