import React from 'react';
import './App.css';
import { Desk } from './components/Desk';
import { HomeView } from './views/HomeView';

function App() {
  return (
    <div className="App">
      <Desk>
        <HomeView />
      </Desk>
    </div>
  );
}

export default App;
