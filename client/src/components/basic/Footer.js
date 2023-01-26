import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    margin: 0,
    paddingTop: 0,
    display: "flex",
    position: "fixed",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "99vw",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <Paper className={classes.footer}>
      <Typography color="primary" variant="h6">
        PARAGON BLOG APP ©
      </Typography>
    </Paper>
  );
}
