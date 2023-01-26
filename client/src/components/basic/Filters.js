import { Stack } from "@mui/system";
import ItemsMenu from "../basic/ItemsMenu";
import { Typography } from "@material-ui/core";

const Filters = ({ filters }) => {
  return (
    <div style={{ margin: "20px  0  0 20px" }}>
      <Typography variant="h6">Filters</Typography>
      <Stack direction="row" spacing={2}>
        {filters.map((filter, i) => {
          return <ItemsMenu key={i} data={filter}></ItemsMenu>;
        })}
      </Stack>
    </div>
  );
};
export default Filters;
