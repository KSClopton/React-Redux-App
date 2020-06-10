import React from 'react';
import './App.css';
import { NavBar } from './Components/NavBar'
import { DrinkCards } from './Components/DrinkCards'
import logger from 'redux-logger'

function App() {



  return (
    <div className="App">
      <NavBar />
      <DrinkCards />
    </div>
  );
}

export default App;
