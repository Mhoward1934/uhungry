import React from "react";

function RecipeDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.matches[0].recipeName} className="img-fluid" src={props.matches[0].imageUrlsBySize[90]} style={{ margin: "0 auto" }} />
      <a href={"https://www.yummly.com/recipe/" + props.matches[0].id}>Name: {props.matches[0].recipeName}</a>
      <h3>Recipe Name: {props.matches[0].recipeName}</h3>
      <h3>Ingredients: {props.matches[0].ingredients}</h3>
    </div>
  );
}

export default RecipeDetail;
