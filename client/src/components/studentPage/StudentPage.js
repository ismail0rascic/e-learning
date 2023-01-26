import { Box, Grid, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Post from "../post/Post";

const StudentPage = ({ posts, authUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    authUser.role !== "student" && navigate("/");
  });
  const enrolled = authUser
    ? posts
        .map((post) => authUser.courses.includes(post._id) && post)
        .filter((e) => e)
    : [];
  const children1 = () => {
    return (
      <>
        <Box style={{ display: "flex" }}>
          <Typography
            variant="h4"
            style={{
              margin: 20,
              width: "100%",
              background: "lightBlue",
              color: "blue",
            }}
          >
            Your Current Courses and Process
          </Typography>
        </Box>
        <Grid container spacing={2} style={{ padding: 20 }}>
          {enrolled.length > 0 &&
            enrolled.map((post, i) => {
              return <Post key={i} post={post} />;
            })}
        </Grid>
      </>
    );
  };

  return <Dashboard children={children1} />;
};

const mapStateToProps = (state) => ({
  posts: state.postR,
  authUser: state.authUserR,
});
export default connect(mapStateToProps)(StudentPage);
