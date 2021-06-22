import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 40,
    height: 40,
    borderRadius: "50%",
    justifyContent: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 10,
  },
});

export default styles;
