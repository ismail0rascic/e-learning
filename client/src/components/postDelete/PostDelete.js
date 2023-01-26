import {  Container, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import Post from "../post/Post";
import usePostDelete from "./usePostDelte";
import Dashboard from "../dashboard/Dashboard";
import CardDialog from "../basic/CardDialog";
const PostDelete = ({ posts }) => {
  const { post, setOpen, open, dialogB, dialogData } = usePostDelete(posts);

  const children = () => {
    return (
      <Container>
        <Typography
          variant="h4"
          style={{
            background: "lightBlue",
            width: "100%",
            textAlign: "center",
            margin: "10px 0 30px 0",
            color: "white",
          }}
        >
          Delete
        </Typography>
        {post && <Post post={post} />}
        <CardDialog
          open={open}
          setOpen={setOpen}
          data={dialogData}
          buttons={dialogB}
        />
      </Container>
    );
  };
  return <Dashboard children={children} />;
};

const mapStateToProps = (state) => ({
  posts: state.postR,
});
export default connect(mapStateToProps)(PostDelete);
