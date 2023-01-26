import axios from "axios";
import { Button, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Avatar, Typography } from "@material-ui/core";

const AddImage = (props) => {
  const upload = (e) => {
    let file = e.target.files[0];
    const formData = new FormData();
    formData.append("photo", file);

    const url = "http://localhost:5000/upload";

    axios.post(url, formData).then((response) => {
      props.setValues({ ...props.values, image: response.data.filename });
    });
  };

  return (
    <Stack alignItems="center" justifyContent="center">
      <Avatar
        src={
          props.element &&
          props.element.image &&
          require("../../images/" + props.element.image)
        }
        style={{ width: 200, height: 200, marginBottom: 30 }}
      />

      <label htmlFor="upload-photo">
        <input
          style={{ display: "none" }}
          accept="image/*"
          id="upload-photo"
          name="upload-photo"
          type="file"
          onChange={upload}
        />

        <Button color="secondary" variant="outlined" component="span">
          <AddCircleOutlineIcon /> &nbsp; Upload button
        </Button>
        <span>{props.values.image ? props.values.image : ""}</span>
        <br />
      </label>
      {props.values.errors.image && (
        <Typography component="p" color="error">
          {props.values.errors.image}
        </Typography>
      )}
    </Stack>
  );
};
export default AddImage;
