import { connect } from "react-redux";

import { Grid } from "@material-ui/core";
import Table from "../basic/Table";
import Dashboard from "../dashboard/Dashboard";

import Header from "../header/Header";
import PostsFilters from "../postsFilters/PostsFilters";
import useShowPosts from "./useShowPosts";
import { Pagination } from "@mui/material";
import usePagination from "../../customHooks/usePagination";
import { useState } from "react";

const ShowPosts = (props) => {
  const [page, setPage] = useState(1);

  const count = Math.ceil(props.posts.length / 10);
  const dataP = usePagination(
    props.posts.filter((post) => post.deleted === false),
    10
  );

  const handleChange = (e, p) => {
    setPage(p);
    dataP.jump(p);
  };

  const { filter, setFilter, data, navigate } = useShowPosts(
    props.users,
    dataP.currentData()
  );

  const children = () => {
    return (
      <>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <Pagination
            count={count}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </div>
      </>
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
