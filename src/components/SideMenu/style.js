import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .MuiListItemText-root": {
      color: "#bbbdc1",
    },
    "& .MuiListItemIcon-root": {
      color: "#bbbdc1",
    },
    "&:hover": {
      "& .MuiListItemText-root": {
        color: "#ffffff",
      },
      "& .MuiListItemIcon-root": {
        color: "#ffffff",
      },
    },
  },
  listItemText: {
    fontSize: "14px",
  },
  listItem: {
    minWidth: "35px",
    paddingRight: "12px",
  },
  menuButtonOpen: {
    color: "#BCCBD8",
    marginTop: theme.spacing(1),
    "&:hover": {
      transform: " translateX(-5px)",
      transition: "transform .2s",
      color: "#ffffff",
    },
  },
  menuButtonClose: {
    color: "#BCCBD8",
    marginTop: theme.spacing(1),
    "&:hover": {
      transform: " translateX(3px)",
      transition: "transform .2s",
      color: "white",
    },
  },
  sideMenuItems: {
    marginTop: theme.spacing(15),
  },
}));

export default styles;
