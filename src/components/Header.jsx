import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
export class Header extends Component {
  state = {
    search: '',
  };
  onClick = () => {
    if (this.state.search) {
      this.props.history.push({
        pathname: `/recipes/search/${this.state.search}`,
      });
    }
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
          <button className="search-btn" onClick={this.onClick}>
            Search
          </button>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
