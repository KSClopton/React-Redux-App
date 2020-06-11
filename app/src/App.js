import React from 'react';
import {BrowserRouter as Router, Links, Route} from 'react-router-dom'

import './App.css';
import { NavBar } from './Components/NavBar'
import { DrinkCards } from './Components/DrinkCards'
import { DrinkRecipe } from './Components/DrinkRecipe'
import logger from 'redux-logger'
import { useSelector } from 'react-redux';

function App() {
  const drinkState = useSelector(state => state.updateCards)
 

  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route exact path='/'><DrinkCards /></Route>
      <Route exact path='/DrinkRecipe'><DrinkRecipe drinks={drinkState}/></Route>
    </div>
    </Router>
  );
}

export default App;
