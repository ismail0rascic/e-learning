import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { connect } from "react-redux";
import { Button, Divider, IconButton, Typography } from "@material-ui/core";
import { SEARCH } from "../../actions/types";

import { Stack } from "@mui/material";
import {
  searchFiltersDuration,
  searchFiltersLevel,
} from "./searchFilters.checks";
import BoxChecker from "../basic/BoxChecker";
import { useState } from "react";

const SearchFilters = ({ filters, setFilters }) => {
  const [show, setShow] = useState({ level: false, duration: false });
  const level = searchFiltersLevel(filters, setFilters);
  const duration = searchFiltersDuration(filters, setFilters);
  return (
    <Stack>
      <Button variant="outlined">Filter</Button>
      <Divider />
      <Typography variant="h6">
        Level
        <IconButton onClick={() => setShow({ ...show, level: !show.level })}>
          <ArrowDropDownIcon />
        </IconButton>
      </Typography>
      {show.level &&
        level.map((_, i) => {
          return <BoxChecker key={i} data={_} />;
        })}
      <Divider />
      <Typography variant="h6">
        Courses Duration
        <IconButton
          onClick={() => setShow({ ...show, duration: !show.duration })}
        >
          <ArrowDropDownIcon />
        </IconButton>
      </Typography>

      {show.duration &&
        duration.map((_, i) => {
          return <BoxChecker key={i} data={_} />;
        })}
    </Stack>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  search: state.searchR,
  posts: state.postR,
});
const mapDispatchToProps = (dispatch) => ({
  searchTerm: (data) => dispatch({ type: SEARCH, payload: data }),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchFilters);
