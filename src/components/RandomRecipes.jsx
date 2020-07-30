import React, { Component } from 'react';
import SingleRecipeCard from './SingleRecipeCard';
import axios from 'axios';
import Recipes from './Recipes';
import { Link } from 'react-router-dom';

export class RandomRecipes extends Component {
  state = {
    randomRecipes: [],
  };
  componentDidMount() {
    if (this.state.randomRecipes.length === 0) {
      // axios
      //   .get(
      //     'https://api.spoonacular.com/recipes/random?apiKey=07ebe5da21d749dc98a78f4c5e85f316&number=8'
      //   )
      //   .then((res) => {
      //     this.setState({ randomRecipes: res.data.recipes });
      //   });
    }
  }
  render() {
    const randomRecipe = this.state.randomRecipes.map((recipe) => (
      <SingleRecipeCard key={recipe.id} recipe={recipe} />
    ));
    return (
      <div>
        <div className="random-recipes">{randomRecipe}</div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/recipes/" className="more-card">
            More
          </Link>
        </div>
      </div>
    );
  }
}

export default RandomRecipes;
