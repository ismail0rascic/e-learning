import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import Field from "../basic/Field";
import CustomizedButton from "../basic/CustomizedButton";
import ProfilePage from "../profilePage/ProfilePage";

import { changePassword } from "../../actions/passwordActions";
import { clearError } from "../../actions/errorActions";
import useStyles from "../../styles/style";
import { setPasswordFields } from "./setPassword.fields.data";
import { setPasswordButtons } from "./setPassword.buttons.data";
import { useNavigate, useParams } from "react-router-dom";

const SetPassword = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const id = useParams().id;
  const [values, setValues] = useState({
    oldPassword: id ? false : "",
    password: "",
    password2: "",
    errors: {},
  });

  useEffect(() => {
    clearError();
  }, []);
  useEffect(() => {
    if (props.errors) {
      setValues({
        ...values,
        errors: props.errors,
      });
    }
    // eslint-disable-next-line
  }, [props.errors]);

  const clickSave = (e) => {
    const newPassword = {
      oldPassword: values.oldPassword,
      password: values.password,
      password2: values.password2,
      id: id ? id : props.auth.user._id,
    };
    changePassword(newPassword, navigate, "/profile");
  };
  const clickCancel = (e) => {
    navigate("/profile");
  };

  const fields = id
    ? setPasswordFields(values, classes).splice(1, 2)
    : setPasswordFields(values, classes);
  const buttons = setPasswordButtons(clickSave, clickCancel, classes);

  const children = () => {
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" className={classes.title}>
            Change Password
          </Typography>
          {fields.map((_, i) => {
            return (
              <Field
                key={_.id}
                data={_}
                values={values}
                id={values.id}
                setValues={setValues}
              />
            );
          })}
        </CardContent>
        <CardActions>
          {buttons.splice(0, 2).map((_, i) => {
            return <CustomizedButton key={i} data={_} />;
          })}
        </CardActions>
      </Card>
    );
  };

  return <ProfilePage children={children} />;
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  errors: state.errorR,
});
export default connect(mapStateToProps)(SetPassword);
