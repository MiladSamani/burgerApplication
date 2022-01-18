import React from "react";
import BuildControl from "../BurgerControls/BurgerControl/burgerControl";
import classes from "../BurgerControls/BurgerControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "Bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  <div className={classes.BuildControls}>
    {controls.map((ctrl) => {
      <BuildControl key={ctrl.label} label={ctrl.label} />;
    })}
  </div>;
};

export default BuildControls;
