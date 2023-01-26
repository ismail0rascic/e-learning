import { connect } from "react-redux";
import { Button, Grid, Typography } from "@material-ui/core";

const Header = ({ data }) => {
  return (
    <Grid container direction={"row"} spacing={3} style={{ padding: 10 }}>
      <Grid item xs={12} md={9} lg={9}>
        <Typography
          variant="h4"
          style={{ background: "lightBlue", color: "white" }}
        >
          {data.title}
        </Typography>
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <Button
          onClick={() => data.func()}
          style={{
            width: "100%",
            background: "lightBlue",
            color: "white",
          }}
        >
          <Typography variant="h5">{data.button}</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
});
export default connect(mapStateToProps)(Header);
