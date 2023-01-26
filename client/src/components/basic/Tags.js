import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import useStyles from "../../styles/style";

export default function Tags({ data }) {
  const classes = useStyles();

  return (
    <Stack direction="row" spacing={1} className={classes.tag}>
      {data.map((_, i) => {
        return <Chip key={i} label={_} variant="outlined" />;
      })}
    </Stack>
  );
}
