import { connect } from "react-redux";
import CustomizedList from "../basic/CustomizedList";
import Post from "../post/Post";
import Dashboard from "../dashboard/Dashboard";
import { useLocation } from "react-router-dom";

const children = (data) => {
  return <Post post={data} />;
};

const Posts = ({ posts, searchedPosts, auth }) => {
  const location = useLocation().pathname;
  const children1 = () => {
    return (
      <>
        {posts.length > 0 && (
          <CustomizedList
            data={
              searchedPosts
                ? searchedPosts
                : location.includes("mentor")
                ? posts
                    .map((post) => post.userId === auth.user._id && post)
                    .filter((p) => p)
                : posts
            }
            child={children}
          />
        )}
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
