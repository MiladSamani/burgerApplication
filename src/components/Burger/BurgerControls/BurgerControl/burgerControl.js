import React from "react";
import classes from "../BurgerControl/burgerControl.module.css";
const BurgerControl = (props) => {
  <div className={classes.BuildControl}>
    <div className={classes.Label}> {props.label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>;
};

export default BurgerControl;