import { connect } from "react-redux";

import { Card, CardContent, Typography, CardActions } from "@material-ui/core";

import Field from "../basic/Field";
import CustomizedButton from "../basic/CustomizedButton";
import ProfilePage from "../profilePage/ProfilePage";

import useStyles from "../../styles/style";
import useDeleteProfile from "./useDeleteProfile";
import useError from "../../customHooks/useError";
import CardDialog from "../basic/CardDialog";
import { signOut } from "../../actions/authActions";

const DeleteProfile = (props) => {
  const classes = useStyles();
  const {
    values,
    setValues,
    open,
    setOpen,
    fields,
    buttons,
    dialogB,
    dialogData,
  } = useDeleteProfile(classes, props.authUser, signOut);
  useError(setValues, values, props.errors);
  const children = () => {
    return (
      <>
        {
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" className={classes.title}>
                Delete Profile
              </Typography>
              <Field
                data={fields}
                values={values}
                id={values.id}
                setValues={setValues}
              />
            </CardContent>
            <CardActions>
              {buttons.map((_, i) => {
                return <CustomizedButton key={i} data={_} />;
              })}
            </CardActions>
            <CardDialog
              open={open}
              setOpen={setOpen}
              data={dialogData}
              buttons={dialogB}
            />
          </Card>
        }
      </>
    );
  };

  return <ProfilePage children={children} />;
};

const mapStateToProps = (state) => ({
  errors: state.errorR,
  authUser: state.authUserR,
});

export default connect(mapStateToProps)(DeleteProfile);
