import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Posts from "../posts/Posts";
import SearchFilters from "../searchFilters/SearchFilters";
import Enroll from "../enroll/Enroll";
import useSearchPosts from "./useSearchPosts";

const SearchPosts = ({ search, posts }) => {
  const { filters, setFilters, filtered } = useSearchPosts(search, posts);
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

export default connect(mapStateToProps)(SearchPosts);
