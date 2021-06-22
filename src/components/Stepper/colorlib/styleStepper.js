import { makeStyles } from "@material-ui/core";

const styleStepper = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, #395697 0%, #395697 50%, #395697 100%)",
    boxShadow: "0 2px 5px 0 rgb(0, 0, 255)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, #395697 0%, #395697 50%, #395697 100%)",
  },
});

export default styleStepper;
