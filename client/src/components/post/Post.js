import { Grid, IconButton } from "@material-ui/core";
import { Typography } from "@mui/material";
import Img from "../basic/Img";

import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

import { useLocation, useNavigate } from "react-router-dom";
import Enroll from "../enroll/Enroll";
import { connect } from "react-redux";
import BoxChecker from "../basic/BoxChecker";
import usePost from "./usePost";
const Post = ({ post, users, authUser }) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const { check } = usePost(post, authUser);

  const children = () => {
    return (
      <Grid container>
        <Grid
          item
          xs={12}
          md={location.includes("student") ? 12 : 4}
          lg={location.includes("student") ? 12 : 4}
        >
          <Img
            src={post.image && require("../../images/" + post.image)}
            alt="item img"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={location.includes("student") ? 12 : 6}
          lg={location.includes("student") ? 12 : 6}
          style={{ textAlign: "start", padding: 5 }}
        >
          <Typography style={{ marginBottom: 10 }} variant="h6" color="primary">
            {post.title}
          </Typography>
          {location.includes("student") ? (
            <>
              <Typography>
                {users.find((o) => (o._id = post.userId))
                  ? users.find((o) => (o._id = post.userId)).firstName
                  : ""}
              </Typography>
              <BoxChecker data={check} />
            </>
          ) : (
            <>
              <Typography style={{ marginBottom: 10 }}>
                Description: {post.description}
              </Typography>
              <Typography>
                {post.duration}&nbsp;&nbsp;&nbsp;{post.level}
              </Typography>
            </>
          )}
        </Grid>
        {!location.includes("delete") &&
          !location.includes("search") &&
          !location.includes("student") && (
            <Grid item xs={12} md={2} lg={2}>
              <IconButton
                style={{
                  height: "100%",
                }}
                onClick={() => navigate(`/edit/post/${post._id}`)}
              >
                <CreateIcon />
              </IconButton>
              <IconButton
                style={{
                  height: "100%",
                }}
                onClick={() => navigate(`/delete/post/${post._id}`)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          )}
      </Grid>
    );
  };
  return (
    <>
      {location.includes("search") ? (
        <Enroll children={children} post={post} authUser={authUser} />
      ) : (
        <Grid
          item
          xs={12}
          md={location.includes("student") ? 4 : 12}
          lg={location.includes("student") ? 4 : 12}
        >
          {children()}
        </Grid>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authR,
  users: state.userR,
  authUser: state.authUserR,
});
export default connect(mapStateToProps)(Post);
