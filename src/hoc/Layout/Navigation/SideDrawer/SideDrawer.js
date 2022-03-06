import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../../../components/Logo/Logo";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../../../components/UI/Backdrop/Backdrop";
import Auxillary from "../../../../hoc/Auxillary/auxillary";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer , classes.Close]
  if (props.open) {
    attachedClasses = [classes.SideDrawer , classes.Open]
  }
  return (
    <Auxillary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxillary>
  );
};

export default SideDrawer;
