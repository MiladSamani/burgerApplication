import React, { Component } from "react";

import Auxillary from "../Auxillary/auxillary";
import classes from "../Layout/Layout.module.css";
import Toolbar from "../Layout/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Layout/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerClosedHandlerToggle = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxillary>
        <Toolbar drawerToggleClicked={this.sideDrawerClosedHandlerToggle} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.content}>{this.props.children}</main>
      </Auxillary>
    );
  }
}

export default Layout;
