import React from "react";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "../Toolbar/Toolbar.module.css";

const Toolbar = (prpos) => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>
      <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
