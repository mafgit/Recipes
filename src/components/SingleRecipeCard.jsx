import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class SingleRecipeCard extends Component {
  render() {
    return (
      <Link
        to={'/recipes/' + this.props.recipe.id}
        className="recipe"
        key={this.props.recipe.id}
        id={this.props.recipe.id}
      >
        <img src={this.props.recipe.image} alt="" />
        <div>
          <h1>{this.props.recipe.title.slice(0, 20)}...</h1>
          <p>
            <span className="fas fa-thumbs-up"></span>
            {this.props.recipe.aggregateLikes}
          </p>
          <p>
            <span className="fas fa-child"></span>
            {this.props.recipe.healthScore}
          </p>
          <p>
            <span className="fas fa-star"></span>
            {this.props.recipe.spoonacularScore}
          </p>
        </div>
      </Link>
    );
  }
}

export default SingleRecipeCard;
