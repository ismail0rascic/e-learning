import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
  },
  title: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginLeft: 20,
    color: theme.palette.openTitle,
  },

  card: {
    maxWidth: 800,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  card1: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    border: "3px solid orange",
  },
  tableC: {
    display: "flex",
    justifyContent: "center",
    border: "3px solid lightBlue",
    alignItems: "center",
    height: 50,
  },
  error: {
    verticalAlign: "middle",
  },

  textField: {
    margin: "auto",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 300,
  },
  textArea: {
    margin: "auto",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "100%",
  },
  textAreaError: {
    margin: "auto",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "100%",
    borderColor: "red",
    color: "red",
  },

  button: {
    display: "block",
    margin: "20px auto",
  },
  buttonUpdate: {
    display: "inline-block",
    margin: "20px",
  },
  commentButton: {},

  list: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    border: "3px solid orange",
  },
  homeItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    height: "50%",
  },

  drawer: {
    width: 240,
  },
  drawerPaper: {
    width: 240,
  },
  pageTitle: {
    marginTop: 10,
    marginBottom: 5,
    width: "60%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    color: theme.palette.openTitle,
  },
  divider: {
    width: "80%",
    margin: "auto",
    backgroundColor: "orange",
  },
  tag: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.openTitle,
    margin: 10,
  },
  tags: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tagsAndButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
