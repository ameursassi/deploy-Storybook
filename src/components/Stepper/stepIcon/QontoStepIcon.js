import React from "react";
import clsx from "clsx";
import Check from "@material-ui/icons/Check";
import styles from "./style";

export default function QontoStepIcon({ active, completed }) {
  const classes = styles();
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}
