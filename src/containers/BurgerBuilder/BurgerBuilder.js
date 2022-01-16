import React, { Component } from "react";
import Auxillary from "../../hoc/auxillary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {};
  render() {
    return (
      <Auxillary>
        <Burger />
        <div>Burger Control</div>
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
