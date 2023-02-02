import { connect } from "react-redux";
import CustomizedList from "../basic/CustomizedList";
import Post from "../post/Post";
import Dashboard from "../dashboard/Dashboard";
import { useLocation } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import usePagination from "../../customHooks/usePagination";
import { useState } from "react";

const children = (data) => {
  return <Post post={data} />;
};

const Posts = ({ posts, searchedPosts, auth }) => {
  const location = useLocation().pathname;
  const [page, setPage] = useState(1);

  const elements = searchedPosts
    ? searchedPosts
    : location.includes("mentor")
    ? posts
        .map((post) => post.userId === auth.user._id && post)
        .filter((post) => post.deleted === false)
    : posts;

  const count = Math.ceil(elements.length / 4);
  const data = usePagination(elements, 4);

  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
  };
  const children1 = () => {
    return (
      <>
        {posts.length > 0 && (
          <CustomizedList data={data.currentData()} child={children} />
        )}
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

  return searchedPosts ? (
    <>{children1()}</>
  ) : (
    <Dashboard children={children1} />
  );
};

const mapStateToProps = (state) => ({
  posts: state.postR,
  auth: state.authR,
});
export default connect(mapStateToProps)(Posts);
