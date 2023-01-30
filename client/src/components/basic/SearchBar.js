import { connect } from "react-redux";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { RUN_SEARCH, SEARCH } from "../../actions/types";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  margin: 10,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "30%",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function SearchBar(props) {
  const navigate = useNavigate();

  const onChange = (e) => {
    props.searchTerm(e.target.value);
  };
  return (
    <Search>
      <IconButton
        onClick={() => {
          navigate("/search/posts");
          props.searchRun();
        }}
      >
        <SearchIcon />
      </IconButton>

      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => onChange(e)}
        value={props.search.term}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            navigate("/search/posts");
            props.searchRun();
          }
        }}
      />
    </Search>
  );
}

const mapStateToProps = (state) => ({
  search: state.searchR,
});
const mapDispatchToProps = (dispatch) => ({
  searchTerm: (data) => dispatch({ type: SEARCH, payload: data }),
  searchRun: () => dispatch({ type: RUN_SEARCH }),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
