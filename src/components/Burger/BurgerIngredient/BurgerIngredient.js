import React, { Component } from "react";
import classes from "../BurgerIngredient/BurgerIngredient.module.css";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingrediment = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingrediment = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingrediment = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "cheese":
        ingrediment = <div className={classes.Cheese}></div>;
        break;
      case "meat":
        ingrediment = <div className={classes.Meat}></div>;
        break;
      case "bakon":
        ingrediment = <div className={classes.Bacon}></div>;
        break;

      case "salad":
        ingrediment = <div className={classes.Salad}></div>;
        break;

      default:
        ingrediment = null;
        break;
    }
    return ingrediment;
  }
}


BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
