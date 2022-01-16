import React from "react";
import Auxillary from "../../hoc/auxillary";
import classes from '../Layout/Layout.module.css'

const layout = (props) => (
  <Auxillary>
    <div>Toolbar - Side Drawer - back drop</div>
    <main className={classes.content}>{props.children}</main>
  </Auxillary>
);

export default layout;
