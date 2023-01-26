import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Typography } from "@material-ui/core";

const Complete = ({ data, disabled }) => {
  return (
    <>
      <Autocomplete
        disabled={disabled}
        className={data.class}
        options={data.data}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        value={data.value}
        onInputChange={(event, newInputValue) => {
          data.changeState(newInputValue);
        }}
        renderInput={(params) => <TextField label={data.title} {...params} />}
      />
      {data.error && (
        <Typography component="p" color="error">
          {data.error}
        </Typography>
      )}
    </>
  );
};

export default Complete;
