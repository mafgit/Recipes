import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import SingleRecipe from './components/SingleRecipe';
import Startpage from './components/Startpage';
import RandomRecipes from './components/RandomRecipes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Startpage} />
        <Route path="/recipes/:id" component={SingleRecipe} />
      </div>
    </BrowserRouter>
  );
}

export default App;
