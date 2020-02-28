import React from 'react';
import './App.css';
import { Desk } from './components/Desk';
function App() {
  return (
    <div className="App">
      <Desk>
        <h1>This is a desk component</h1>
      </Desk>
    </div>
  );
}

export default App;
