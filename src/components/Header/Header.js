import React from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import styles from "./style";

export default function Header() {
  const classes = styles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar disableGutters={true}>
        <Grid item xs></Grid>
      </Toolbar>
    </AppBar>
  );
}
