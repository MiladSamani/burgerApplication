import React from "react";
import Auxillary from "../../../hoc/auxillary";
import Button from "../../UI/Button/Button";

const OrderSummery = (props) => {
  const IngredientsSummery = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTranform: 'capitalize' }}>{igKey} : </span>
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxillary>
      <h3>Your Order </h3>
      <p>A delicious order with the following ingredients :</p>
      <ul>{IngredientsSummery}</ul>
      <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout ? </p>
      <Button btnType="Danger" cliked={props.purchasingCancelled}>Cancel</Button>
      <Button btnType="Success" cliked={props.purchasingContinue}>Continue</Button>
    </Auxillary>
  );
};

export default OrderSummery;
