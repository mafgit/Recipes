import React, { Component } from 'react';
import SingleRecipeCard from './SingleRecipeCard';
import axios from 'axios';
import SingleRecipeHeader from './SingleRecipeHeader';
import { apiKey } from '../config';
export class SearchRecipes extends Component {
  state = {
    recipes: [],
    query: '',
  };
  componentDidMount() {
    this.setState({ query: this.props.match.params.query });
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${this.props.match.params.query}&number=30&apiKey=${apiKey}`
      )
      .then((res) => {
        this.setState({ recipes: res.data.results });
      });
  }
  render() {
    const recipes = this.state.recipes.map((recipe) => {
      return <SingleRecipeCard recipe={recipe} key={recipe.id} />;
    });
    return (
      <div>
        <SingleRecipeHeader />
        <div className="search-page">{recipes}</div>
      </div>
    );
  }
}

export default SearchRecipes;
