import React from "react";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "../Toolbar/Toolbar.module.css";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"

const Toolbar = (prpos) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={prpos.drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
