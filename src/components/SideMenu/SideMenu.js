import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import styles from "./style";

export default function SideMenu({ menuItems }) {
  const classes = styles();

  return (
    <>
      <List className={classes.sideMenuItems}>
        {menuItems.map((item) => (
          <Link href={item.href} underline="none" key={item.title}>
            <ListItem button className={classes.root}>
              <ListItemIcon className={classes.listItem}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}
