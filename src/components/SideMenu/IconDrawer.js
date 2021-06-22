import React from "react";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import styles from "./style";

function IconDrawer({ handleDrawerOpen, open }) {
  const classes = styles();
  return (
    <>
      <Divider />
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={handleDrawerOpen}
        className={open ? classes.menuButtonOpen : classes.menuButtonClose}
      >
        {open ? (
          <i
            className="fas fa-arrow-circle-left"
            style={{
              fontSize: "20px",
            }}
          ></i>
        ) : (
          <i
            className="fas fa-arrow-circle-right"
            style={{
              fontSize: "20px",
            }}
          ></i>
        )}
      </IconButton>
    </>
  );
}

export default IconDrawer;
