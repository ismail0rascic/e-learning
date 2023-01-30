import { Box, Grid, Typography } from "@material-ui/core";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import usePagination from "../../customHooks/usePagination";
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

  const [page, setPage] = useState(1);

  const count = Math.ceil(enrolled.length / 6);
  const data = usePagination(enrolled, 6);

  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
  };

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
          {data.currentData().length > 0 &&
            data.currentData().map((post, i) => {
              return <Post key={i} post={post} />;
            })}
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

  return <Dashboard children={children1} />;
};

const mapStateToProps = (state) => ({
  posts: state.postR,
  authUser: state.authUserR,
});
export default connect(mapStateToProps)(StudentPage);
