import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    "& .MuiStepper-root": {
      padding: "5px",
    },
    width: "100%",
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  label: {
    "& .MuiStepLabel-label": {
      marginTop: theme.spacing(3),
    },
  },
  alternativeLabel: {
    "& .MuiStepLabel-alternativeLabel": {
      marginTop: "3px",
      fontSize: "10px",
    },
  },
}));
export default styles;
