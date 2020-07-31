import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
export class Header extends Component {
  state = {
    search: '',
  };
  onChange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    return (
      <header>
        <div className="header-hide">
          <h1>mafrecipes</h1>
          <p>The Largest Collection of Recipes</p>
          <input type="text" onChange={this.onChange} />
          <a
            href={'/recipes/search/' + this.state.search}
            className="search-btn"
          >
            Search
          </a>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
