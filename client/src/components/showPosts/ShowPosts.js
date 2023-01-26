import { connect } from "react-redux";

import { Grid } from "@material-ui/core";
import Table from "../basic/Table";
import Dashboard from "../dashboard/Dashboard";

import Header from "../header/Header";
import PostsFilters from "../postsFilters/PostsFilters";
import useShowPosts from "./useShowPosts";

const ShowPosts = (props) => {
  const { filter, setFilter, data, navigate } = useShowPosts(
    props.users,
    props.posts
  );

  const children = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Header
            data={{
              title: "All Courses",
              func: () => {
                navigate("/new/post");
              },
              button: "Add Courses",
            }}
          />
          <PostsFilters filter={filter} setFilter={setFilter} />
          {data && <Table data={data} />}
        </Grid>
      </Grid>
    );
  };

  return <Dashboard children={children} />;
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  posts: state.postR,
  users: state.userR,
});
export default connect(mapStateToProps)(ShowPosts);
