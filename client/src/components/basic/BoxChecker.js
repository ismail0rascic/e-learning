import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@material-ui/core";
const BoxChecker = ({ data }) => {
  return (
    <>
      <FormGroup className={data.class}>
        <FormControlLabel
          disabled={data.disabled && true}
          checked={
            data.values
              ? data.values.includes(data.value)
              : data.value === true && data.value
          }
          style={{ justifyContent: "center" }}
          value={data.value}
          control={
            <Checkbox onChange={(e) => data.changeState(e.target.value)} />
          }
          label={data.label}
        />
      </FormGroup>
      {data.error && (
        <Typography component="p" color="error">
          {data.error}
        </Typography>
      )}
    </>
  );
};
export default BoxChecker;
