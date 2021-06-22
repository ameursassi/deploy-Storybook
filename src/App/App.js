import React, { useState } from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import PostAddIcon from "@material-ui/icons/PostAdd";
import DescriptionIcon from "@material-ui/icons/Description";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu";
import IconDrawer from "../components/SideMenu/IconDrawer";
import theme from "./theme";
import styles from "./style";
import ListProjects from "../components/ListProjects/ListProjects";
import Header from "../components/Header/Header";

function App() {
  const classes = styles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const menuItems = [
    { href: "/", icon: <PostAddIcon />, title: "Page 1" },
    { href: "/page2", icon: <SettingsIcon />, title: "Page 2" },
    { href: "/page3", icon: <DescriptionIcon />, title: "Page 3" },
    { href: "/page4", icon: <DriveEtaIcon />, title: "Page 4" },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <SideMenu menuItems={menuItems} />
        <div className={!open ? classes.toolbarOpen : classes.toolbarClose}>
          <IconDrawer handleDrawerOpen={handleDrawerOpen} open={open} />
        </div>
      </Drawer>
      <main className={classes.content}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/" component={ListProjects} />
            </Switch>
          </Router>
          <CssBaseline />
        </ThemeProvider>
      </main>
    </div>
  );
}

export default App;
