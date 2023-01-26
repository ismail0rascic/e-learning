import { Button } from "@material-ui/core";

const CustomizedButton = ({ data }) => {
  return (
    <Button
      color="secondary"
      variant="contained"
      onClick={data.func}
      className={data.class}
    >
      {data.title}
    </Button>
  );
};

export default CustomizedButton;
