import React, { Component } from 'react';

export class SimilarRecipes extends Component {
  render() {
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

export default SimilarRecipes;
