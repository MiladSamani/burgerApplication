import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "Bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        added={() => props.ingredientsAdded(ctrl.type)}
        removed={() => props.ingredientsRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button disabled={!props.purch} className={classes.OrderButton}>Order Now</button>
  </div>
);
export default buildControls;
