import React from 'react';
import './App.css';
import { Desk } from './components/Desk';
import { DeskItem } from './components/DeskItem'
function App() {
  return (
    <div className="App">
      <Desk>
        <DeskItem scale={0.35} />
      </Desk>
    </div>
  );
}

export default App;
