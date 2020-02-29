import React from 'react';
import './App.css';
import { Desk } from './components/Desk';
import itemsData from './data/itemsData';
import { DeskItem } from './components/DeskItem';
import { Switch, Route, Link } from 'react-router-dom';

const App = props => {
  const itemComponents = itemsData.map(
    (itemData, i) => <DeskItem key={i} scale={props.scale} data={itemData} />
  );
  return (
    <div className="App">
      <Desk>
        <Switch>
          <Route exact path='/'>
            {itemComponents}
          </Route>
          <Route exact path='/education'>
            <Link to='/'>GO BACK</Link>
            <h2>Potatos</h2>
          </Route>
        </Switch>
      </Desk>
    </div>
  );
}

export default App;
