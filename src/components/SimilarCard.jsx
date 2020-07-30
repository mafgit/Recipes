import React, { Component } from 'react';
export class SimilarCard extends Component {
  render() {
    return (
      <a
        href={'/recipes/' + this.props.recipe.id}
        className="similar-card"
        key={this.props.recipe.id}
        id={this.props.recipe.id}
      >
        <div>
          <h1>{this.props.recipe.title.slice(0, 40)}...</h1>
        </div>
      </a>
    );
  }
}

export default SimilarCard;
