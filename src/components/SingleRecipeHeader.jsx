import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
export class SingleRecipeHeader extends Component {
  state = {
    search: '',
  };
  onClick = () => {
    console.log('x');
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
      <div className="header-recipe-top">
        <Link to="/" style={{ color: 'white' }}>
          <h1>mafrecipes</h1>
        </Link>
        <div>
          <input type="text" onChange={this.onChange} />
          <button className="search-btn" onClick={this.onClick}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SingleRecipeHeader);
