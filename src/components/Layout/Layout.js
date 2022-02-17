import React from "react";
import Auxillary from "../../hoc/auxillary";
import classes from '../Layout/Layout.module.css'
import Toolbar from "./Navigation/Toolbar/Toolbar";

const layout = (props) => (
  <Auxillary>
    <Toolbar />
    <main className={classes.content}>{props.children}</main>
  </Auxillary>
);

export default layout;
