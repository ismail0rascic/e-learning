import { Grid } from "@material-ui/core";
import SideBar from "../sideBar/SideBar";

const Dashboard = ({ children }) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={2} lg={2} style={{ border: "1px solid black" }}>
        <SideBar />
      </Grid>
      <Grid item xs={12} md={10} lg={10} style={{ border: "1px solid black" }}>
        {children && children()}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
