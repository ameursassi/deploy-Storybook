import { withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,#395697 0%,#395697 50%,#395697 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,#395697 0%,#395697 50%,#395697 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);
export default ColorlibConnector;
