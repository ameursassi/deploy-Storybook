import { makeStyles } from "@material-ui/core";
const drawerWidth = 160;
const styles = makeStyles((theme) => ({
  appMain: {
    width: "100%",
  },
  root: {
    display: "flex",
    "& .MuiListItem-root": {
      color: "white",
    },
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: "#18202c",

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    backgroundColor: "#18202c",

    width: theme.spacing(4) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(6) + 1,
    },
  },
  toolbarOpen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  toolbarClose: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    overflowX: "hidden",
  },
  grow: {
    flexGrow: 1,
  },
  listItem: {
    minWidth: "35px",
    paddingRight: "12px",
    color: "white",
  },
  linkTex: {
    textDecoration: "none",
    color: "white",
  },
}));

export default styles;
