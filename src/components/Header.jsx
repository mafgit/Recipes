import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-hide">
          <h1>mafrecipes</h1>
          <p>The Largest Collection of Recipes</p>
          <input type="text" name="" id="" />
          <button className="search-btn">Search</button>
        </div>
      </header>
    );
  }
}

export default Header;
