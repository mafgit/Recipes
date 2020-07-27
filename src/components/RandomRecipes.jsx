import React, { Component } from 'react';
import SingleRecipeCard from './SingleRecipeCard';
import axios from 'axios';

export class RandomRecipes extends Component {
  state = {
    randomRecipes: [],
  };
  componentDidMount() {
    if (this.state.randomRecipes.length === 0) {
      axios
        .get(
          'https://api.spoonacular.com/recipes/random?apiKey=07ebe5da21d749dc98a78f4c5e85f316&number=8'
        )
        .then((res) => {
          // res.data.recipes.forEach((recipe) => randomRecipes.push(recipe));
          this.setState({ randomRecipes: res.data.recipes });
        });
    }
  }
  render() {
    console.log(this.state.randomRecipes);
    const randomRecipe = this.state.randomRecipes.map((recipe) => (
      <SingleRecipeCard key={recipe.id} recipe={recipe} />
    ));
    return (
      <div>
        <div className="random-recipes">{randomRecipe}</div>
        <div className="more-card">More</div>
      </div>
    );
  }
}

export default RandomRecipes;
