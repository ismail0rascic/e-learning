import { useState } from "react";
import { useEffect } from "react";
import { addComplete } from "../../actions/userActions";
import useStyles from "../../styles/style";
import { postCheck } from "./post.check";

const usePost = (post, authUser) => {
  const classes = useStyles();
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    completed &&
      addComplete({
        userId: authUser && authUser._id,
        postId: post && post._id,
      }); // eslint-disable-next-line
  }, [completed]);

  const check = authUser && postCheck(setCompleted, authUser, post, classes);
  return { check };
};
export default usePost;
