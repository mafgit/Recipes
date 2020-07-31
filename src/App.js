import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SingleRecipe from './components/SingleRecipe';
import Startpage from './components/Startpage';
import SearchRecipes from './components/SearchRecipes';
import RandomPage from './components/RandomPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Startpage} />
          <Route exact path="/recipes/" component={RandomPage} />
          <Route
            path="/recipes/search/:query"
            component={SearchRecipes}
            // render={(props) => <SearchRecipes {...props} />}
          />
          <Route path="/recipes/:id" component={SingleRecipe} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
