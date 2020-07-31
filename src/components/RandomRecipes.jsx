import React, { Component } from 'react';
import SingleRecipeCard from './SingleRecipeCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { apiKey } from '../config';

export class RandomRecipes extends Component {
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
          return this.setState({ randomRecipes: res.data.recipes });
        });
    }
  }
  render() {
    const randomRecipe = this.state.randomRecipes.map((recipe) => (
      <SingleRecipeCard key={recipe.id} recipe={recipe} />
    ));
    return (
      <div>
        <div className="random-recipes">{randomRecipe}</div>
        <div style={{ textAlign: 'center', padding: 40, margin: 'auto' }}>
          <Link to="/recipes/" className="more-card">
            More
          </Link>
        </div>
      </div>
    );
  }
}

export default RandomRecipes;
