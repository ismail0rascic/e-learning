import { connect } from "react-redux";
import { ButtonGroup, Grid } from "@material-ui/core";
import useStyles from "../../styles/style";
import CustomizedButton from "../basic/CustomizedButton";
import Dashboard from "../dashboard/Dashboard";
import useProfilePage from "./useProfilePage";
import ItemsMenu from "../basic/ItemsMenu";

const ProfilePage = ({ user, children }) => {
  const classes = useStyles();
  const { buttons, data, location } = useProfilePage(classes, user);
  const children1 = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <ButtonGroup
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "flex-end",
              padding: 30,
            }}
          >
            <ItemsMenu data={data} />
            {location === "profile" && <CustomizedButton data={buttons} />}
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          {children && children()}
        </Grid>
      </Grid>
    );
  };

  return <Dashboard children={children1} />;
};

const mapStateToProps = (state) => ({
  user: state.userR,
});

export default connect(mapStateToProps)(ProfilePage);
