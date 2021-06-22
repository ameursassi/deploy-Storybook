import React from "react";
import { Paper } from "@material-ui/core";
import Stepper from "../Stepper/Stepper";
import styles from "./style";

export default function SubHeader() {
  const classes = styles();
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Stepper status={""} />
      </div>
    </Paper>
  );
}
