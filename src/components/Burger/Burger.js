import React from 'react';
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";
import classes from "../Burger/Burger.module.css"

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient  type={"bread-top"} />
      <BurgerIngredient type={"cheese"} />
      <BurgerIngredient type={"meat"} />
      <BurgerIngredient type={"bread-bottom"} />
    </div>
  );
};

export default burger;