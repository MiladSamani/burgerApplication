import React from "react";
import classes from "../NavigationItems/NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">checkout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
