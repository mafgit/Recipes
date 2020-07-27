import React, { Component } from 'react';
import SingleRecipeHeader from './SingleRecipeHeader';
import axios from 'axios';

export class SingleRecipe extends Component {
  state = {
    information: {
      dishTypes: [],
      summary: '',
      analyzedInstructions: [{ steps: [{ step: 'step' }] }],
    },
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=07ebe5da21d749dc98a78f4c5e85f316`
      )
      .then((res) => this.setState({ information: res.data }));
  }
  render() {
    let {
      image,
      aggregateLikes,
      creditsText,
      summary,
      title,
      spoonacularScore,
      healthScore,
      dishTypes,
      analyzedInstructions,
      readyInMinutes,
      vegetarian,
      vegan,
      cheap,
      sustainable,
      veryPopular,
      veryHealthy,
    } = this.state.information;
    summary = summary.replace(/<.+?>/gi, '');
    let step = analyzedInstructions[0].steps.map((step) => (
      <li key={Math.random()} className="step">
        {step.step}
      </li>
    ));
    let dishType = dishTypes.map((dish) => (
      <p className="dish-type" key={dish}>
        {dish}
      </p>
    ));
    let tags = {
      vegetarian,
      vegan,
      veryHealthy,
      veryPopular,
      cheap,
      sustainable,
    };
    let showTags = [];
    Object.values(tags).forEach((tag, i) => {
      if (tag === true) {
        showTags.push(Object.keys(tags)[i]);
      }
    });
    let currentTag = showTags.map((tag) => (
      <div key={tag} className="tag">
        {tag}
      </div>
    ));
    return (
      <div className="single-recipe-body">
        <SingleRecipeHeader />

        <div className="header-recipe">
          <img src={image} className="image" alt="" />
          <div className="recipe-intro">
            <h1>{title}</h1>
            <div>
              <span className="aggregatedLikes fas fa-thumbs-up"></span>
              <span>Likes: {aggregateLikes}</span>
            </div>
            <div>
              <span className="spoonsplashScore fas fa-star"></span>
              <span>Website Rating: {spoonacularScore}</span>
            </div>
            <div>
              <span className="healthScore fas fa-child"></span>
              <span>Health Score: {healthScore}</span>
            </div>
            <div>
              <span className="readyinminutes fas fa-coffee"></span>
              <span>Ready in Minutes: {readyInMinutes}</span>
            </div>
            <div className="tags">{currentTag}</div>
          </div>
        </div>
        <div className="recipe-details">
          <section>
            <h1 className="section-heading">Summary</h1>
            <p className="summary">{summary}</p>
          </section>
          <section className="section-heading">
            <h1>Dish Types</h1>
            <div className="dish-types">{dishType}</div>
          </section>

          <section>
            <h1 className="section-heading">INSTRUCTIONS</h1>
            <ul className="steps">{step}</ul>
          </section>

          <div className="credits">
            <q>{creditsText}</q>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleRecipe;
//tags, dishtypes, steps
