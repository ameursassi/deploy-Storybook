import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  pageContent: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(4),
    padding: theme.spacing(2),
    overflowX: "auto",
  },

  text: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "30px",
  },
  rootTitle: {
    backgroundColor: "white",
    marginTop: theme.spacing(6),
    padding: theme.spacing(2),
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    color: "#253053",
    fontWeight: "bold",
    fontSize: "20px",
    marginTop: "5px",
  },
  iconTitle: {
    color: "#253053",
    fontSize: "25px",
    marginTop: "7px",
    marginRight: "4px",
  },

  tours: {
    marginRight: "30px",
    marginTop: "8px",
  },
  titleTours: {
    fontSize: "12px",
  },
  iconTours: {
    display: "flex",
  },
  iconAttach: {
    color: "#6e587a",
    fontSize: "22px",
  },
  numberTours: {
    fontSize: "14px",
    marginTop: "3px",
    color: "#6e587a",
  },
  chipStatus: {
    "& .MuiChip-root": {
      paddingLeft: theme.spacing(2.2),
      paddingRight: theme.spacing(2.2),
    },
  },

  companySuccess: {
    backgroundColor: theme.palette.companySuccess,
    "& .MuiButton-label": {
      color: "white",
    },
  },

  linearProgress: {
    height: "10px",
    minWidth: "120px",
  },
}));

export default styles;
