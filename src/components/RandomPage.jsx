import React, { Component } from 'react';
import SingleRecipeCard from './SingleRecipeCard';
import axios from 'axios';
import { apiKey } from '../config';
import { SingleRecipeHeader } from './SingleRecipeHeader';
class RandomPage extends Component {
  state = {
    randomRecipes: [],
  };
  componentDidMount() {
    if (this.state.randomRecipes.length === 0) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8`
        )
        .then((res) => {
          this.setState({ randomRecipes: res.data.recipes });
        });
    }
  }
  render() {
    const randomRecipe = this.state.randomRecipes.map((recipe) => (
      <SingleRecipeCard key={recipe.id} recipe={recipe} />
    ));
    return (
      <div>
        <SingleRecipeHeader />
        <div className="random-recipes">{randomRecipe}</div>
      </div>
    );
  }
}

export default RandomPage;
