import { connect } from "react-redux";

import { Grid } from "@material-ui/core";
import Posts from "../posts/Posts";
import SearchFilters from "../searchFilters/SearchFilters";
import Enroll from "../enroll/Enroll";

import useSearchPosts from "./useSearchPosts";
import { SEARCH } from "../../actions/types";

const SearchPosts = ({ search, posts, searchTerm }) => {
  const { filters, setFilters, filtered } = useSearchPosts(
    search,
    posts.filter((post) => post.deleted === false),
    searchTerm
  );
  return (
    <Grid container direction={"row"} spacing={3} style={{ padding: 10 }}>
      <Grid item xs={12} md={3} lg={3}>
        <SearchFilters filters={filters} setFilters={setFilters} />
      </Grid>
      <Grid item xs={12} md={9} lg={9}>
        {filtered.length > 0 && (
          <Posts searchedPosts={[...filtered.filter((filter) => filter)]} />
        )}
        <Enroll />
      </Grid>
    </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPosts);
