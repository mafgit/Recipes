import React, { Component } from 'react';
import Header from './Header';
import RandomRecipes from './RandomRecipes';

export class Startpage extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <div id="info">
            <div className="info info-1">
              <span className="fas fa-utensils"></span>
              <h1>Find the recipe you want.</h1>
            </div>
            <div className="info info-1">
              <span className="fas fa-hamburger"></span>
              <h1>Delicious and tasty meals.</h1>
            </div>
            <div className="info info-1">
              <span className="fas fa-dollar-sign"></span>
              <h1>Get at a price of zero.</h1>
            </div>
          </div>
          <h1 className="random-heading">Random Recipes</h1>
          <div id="featured-recipes">
            <RandomRecipes />
          </div>
        </main>
      </div>
    );
  }
}

export default Startpage;
