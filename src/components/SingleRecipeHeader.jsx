import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
export class SingleRecipeHeader extends Component {
  state = {
    search: '',
  };

  onChange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    return (
      <div className="header-recipe-top">
        <Link to="/" style={{ color: 'white' }}>
          <h1>mafrecipes</h1>
        </Link>
        <div>
          <input
            className="single-input"
            type="text"
            onChange={this.onChange}
          />
          <a
            href={'/recipes/search/' + this.state.search}
            className="search-btn single-btn"
          >
            Search
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(SingleRecipeHeader);
