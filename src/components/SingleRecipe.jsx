import React, { Component } from 'react';
import SingleRecipeHeader from './SingleRecipeHeader';
import axios from 'axios';
import SimilarCard from './SimilarCard';
import { apiKey } from '../config';

export class SingleRecipe extends Component {
  state = {
    information: {
      dishTypes: [],
      summary: '',
      analyzedInstructions: [{ steps: [{ step: 'step' }] }],
    },
    similar: [],
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
      )
      .then((res) => {
        this.setState({ information: res.data });
        axios
          .get(
            `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}&number=8`
          )
          .then((res) => {
            this.setState({ similar: res.data });
          });
      });
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
    let step = analyzedInstructions[0] ? (
      analyzedInstructions[0].steps.map((step) => (
        <li key={Math.random()} className="step">
          {step.step}
        </li>
      ))
    ) : (
      <div></div>
    );
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
    let similarRecipe = this.state.similar.map((similar) => (
      <SimilarCard key={similar.id} recipe={similar} />
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
          <section className="similar-section">
            <div>
              <h1>Similar Recipes</h1>
            </div>
            <div className="similar-recipes">{similarRecipe}</div>
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
// INGREDIENTS
// SOME DONT HAVE INSTRUCTIONS
// ALL RECIPES COMPONENT
// SEARCH RECIPES COMPONENT
// ...
