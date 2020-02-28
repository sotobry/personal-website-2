import React from 'react';
import './App.css';
import { Desk } from './components/Desk';
import { HomeView } from './views/HomeView';

function App() {
  return (
    <div className="App">
      <Desk>
        <HomeView scale={0.35} />
      </Desk>
    </div>
  );
}

export default App;
