import { connect } from "react-redux";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
} from "@material-ui/core";

import Field from "../basic/Field";
import CustomizedButton from "../basic/CustomizedButton";
import ProfilePage from "../profilePage/ProfilePage";
import UploadImage from "../basic/UploadImage";

import useStyles from "../../styles/style";
import useUpdateProfile from "./useUpdateProfile";
import useError from "../../customHooks/useError";
import Complete from "../basic/Complete";
import BoxChecker from "../basic/BoxChecker";
const UpdateProfile = (props) => {
  const classes = useStyles();
  const { values, setValues, fields, buttons, completes, check, id, editUser } =
    useUpdateProfile(classes, props.users, props.authUser);
  useError(setValues, values, props.errors);
  const children = () => {
    return (
      <>
        {props.authUser && (
          <Card className={classes.card}>
            <CardContent>
              <Grid container>
                <Grid item xs={6} md={7} lg={7}>
                  <Typography variant="h5" className={classes.title}>
                    Update User
                  </Typography>
                  {fields.map((_, i) => {
                    return (
                      <Field
                        key={_ + i}
                        data={_}
                        values={values}
                        id={values.id}
                        setValues={setValues}
                      />
                    );
                  })}
                  {id && <Complete data={completes} />}
                  {id && <BoxChecker data={check} />}
                </Grid>
                <Grid item xs={6} md={5} lg={5}>
                  <UploadImage
                    values={values}
                    setValues={setValues}
                    element={editUser}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              {buttons.map((_, i) => {
                return <CustomizedButton key={i} data={_} />;
              })}
            </CardActions>
          </Card>
        )}
      </>
    );
  };

  return <ProfilePage children={children} />;
};

const mapStateToProps = (state) => ({
  errors: state.errorR,
  users: state.userR,
  authUser: state.authUserR,
});

export default connect(mapStateToProps)(UpdateProfile);
