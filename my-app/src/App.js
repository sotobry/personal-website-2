import React from 'react';
import './App.css';
import { Desk } from './components/Desk';
import { HomeView } from './views/HomeView';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Desk>
        <Switch>
          <HomeView scale={0.35} />
        </Switch>
      </Desk>
    </div>
  );
}

export default App;
