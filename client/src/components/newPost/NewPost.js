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
import UploadImage from "../basic/UploadImage";

import useStyles from "../../styles/style";
import useNewPost from "./useNewPost";
import useError from "../../customHooks/useError";
import CardDialog from "../basic/CardDialog";
import { returnDialogData } from "./dialog.helper";
import { useLocation } from "react-router-dom";
import Complete from "../basic/Complete";
import TextArea from "../basic/TextArea";
const NewPost = (props) => {
  const classes = useStyles();
  const location = useLocation().pathname;

  const {
    values,
    setValues,
    fields,
    areas,
    buttons,
    dButtons,
    open,
    setOpen,
    completes,
    post,
  } = useNewPost(classes, props.posts, props.authUser);
  useError(setValues, values, props.errors);
  const dialog = returnDialogData();
  return (
    <>
      (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5">
            {location.includes("new") ? "ADD" : "UPDATE"}
          </Typography>
          <Grid container>
            <Grid item xs={6} md={6} lg={6}>
              <Field
                data={fields}
                values={values}
                id={values.id}
                setValues={setValues}
              />
              <TextArea data={areas} values={values} setValues={setValues} />
              <Complete data={completes[0]} />
            </Grid>

            <Grid item xs={6} md={6} lg={6}>
              <Complete data={completes[1]} />
              <UploadImage
                image={""}
                values={values}
                setValues={setValues}
                element={post}
              />
            </Grid>
          </Grid>
          {values.errors.add && (
            <Typography component="p" color="error">
              {values.errors.add}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          {buttons.map((_, i) => {
            return <CustomizedButton key={i} data={_} />;
          })}
        </CardActions>
        {open && (
          <CardDialog
            data={dialog}
            buttons={dButtons}
            open={open}
            setOpen={setOpen}
          />
        )}
      </Card>
      )
    </>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errorR,
  posts: state.postR,
  authUser: state.authUserR,
});
export default connect(mapStateToProps)(NewPost);
