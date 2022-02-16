
import React from "react";
import Auxillary from "../../../hoc/auxillary";

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
      <p>Are you sure ? </p>
    </Auxillary>
  );
};

export default OrderSummery;
