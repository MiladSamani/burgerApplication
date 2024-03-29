import React from "react";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";
import classes from "../Burger/Burger.module.css";

const burger = (props) => {
  let transformIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

if (transformIngredients.length ===0) {
  transformIngredients = <p>Please Adding a Ingredients!</p>
}

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={"bread-top"} />
      {transformIngredients}
      <BurgerIngredient type={"bread-bottom"} />
    </div>
  );
};

export default burger;
