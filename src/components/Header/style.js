import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
    height: 50,
  },
}));
export default styles;
