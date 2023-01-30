import { Avatar, Grid, Paper } from "@mui/material";
import useStyles from "../../styles/style";

const Table = ({ data }) => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.root}
      elevation={4}
      style={{ width: "auto", overflow: "auto" }}
    >
      <Grid container spacing={2} direction="row" style={{ minWidth: 800 }}>
        {data &&
          data.map((_, j) => {
            return (
              <Grid
                key={_.id + _.title}
                item
                xs={12 / data.length}
                md={12 / data.length}
                lg={12 / data.length}
              >
                {_.elements.map((element, i) => {
                  return (
                    <Grid item className={classes.tableC} key={_.id + i + j}>
                      {_.title !== "Image" ? (
                        element
                      ) : (
                        <Avatar
                          src={element && require(`../../images/${element}`)}
                        />
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
      </Grid>
    </Paper>
  );
};

export default Table;
