import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary/auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/OrderSummary/OrderSummery";

const INGREDINETS_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  meat: 1.5,
  Bacon: 0.3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      Bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updateCount;
    const priceAddition = INGREDINETS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
    this.updatePurchaseState(updatedIngredient);
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updateCount;
    const priceDeduction = INGREDINETS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
    this.updatePurchaseState(updatedIngredient);
  };

  purchasingHandler = () => {
    this.setState({purchasing : true})
  };
  purchasingHandlerCancelled = () => {
    this.setState({purchasing : false})
  };
  purchasingHandlerContiue = () =>{
    alert('HUMMM')
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Auxillary>
        <Modal show = {this.state.purchasing} modalClicked ={this.purchasingHandlerCancelled}>
          <OrderSummery
          price = {this.state.totalPrice}
          purchasingCancelled={this.purchasingHandlerCancelled}
          purchasingContinue={this.purchasingHandlerContiue}
          ingredients={this.state.ingredients}></OrderSummery>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemove={this.removeIngredientHandler}
          disabled={disabledInfo}
          purch={this.state.purchasable}
          price={this.state.totalPrice}
          orderd = {this.purchasingHandler}
        />
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
