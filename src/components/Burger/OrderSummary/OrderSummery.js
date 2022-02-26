import React, { Component } from 'react';
import Auxillary from "../../../hoc/auxillary";
import Button from "../../UI/Button/Button";


class OrderSummery extends Component {
  componentWillUnmount(){
    console.log("updated");
  }
  render() { 
    const IngredientsSummery = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTranform: 'capitalize' }}>{igKey} : </span>
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Auxillary>
        <h3>Your Order </h3>
        <p>A delicious order with the following ingredients :</p>
        <ul>{IngredientsSummery}</ul>
        <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout ? </p>
        <Button btnType="Danger" cliked={this.props.purchasingCancelled}>Cancel</Button>
        <Button btnType="Success" cliked={this.props.purchasingContinue}>Continue</Button>
      </Auxillary>
    );
  }
}
 
export default OrderSummery;

