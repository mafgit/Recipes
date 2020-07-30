import React, { Component } from 'react';
import SingleRecipeCard from './SingleRecipeCard';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import SingleRecipeHeader from './SingleRecipeHeader';
export class SearchRecipes extends Component {
  state = {
    recipes: [],
    search: '',
  };
  componentDidUpdate() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${this.props.match.params.query}&apiKey=07ebe5da21d749dc98a78f4c5e85f316`
      )
      .then((res) => {
        this.setState({ recipes: res.data.results });
      });
  }
  render() {
    let recipes = this.state.recipes.map((recipe) => {
      return <SingleRecipeCard recipe={recipe} key={recipe.id} />;
    });
    return (
      <div key={this.props.match.params.query}>
        <SingleRecipeHeader />
        <div className="search-page">{recipes}</div>
      </div>
    );
  }
}

export default withRouter(SearchRecipes);
