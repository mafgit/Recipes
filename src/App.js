import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SingleRecipe from './components/SingleRecipe';
import Startpage from './components/Startpage';
import SearchRecipes from './components/SearchRecipes';
import Recipes from './components/Recipes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Startpage} />
          <Route exact path="/recipes" component={Recipes} />
          <Route
            path="/recipes/search/:query"
            render={(props) => <SearchRecipes {...props} />}
          />
          <Route path="/recipes/:id" component={SingleRecipe} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
