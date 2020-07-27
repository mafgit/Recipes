import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class SingleRecipeHeader extends Component {
  render() {
    return (
      <div className="header-recipe-top">
        <Link to="/" style={{ color: 'white' }}>
          <h1>mafrecipes</h1>
        </Link>
        <div>
          <input type="text" name="" id="" />
          <button className="search-btn">Search</button>
        </div>
      </div>
    );
  }
}

export default SingleRecipeHeader;
