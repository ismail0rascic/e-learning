import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { newPostFields } from "./newPost.fields.data";
import { newPostAreas } from "./newPost.areas.data";
import { newPostCompletes } from "./newPost.completes.data";
import { newPostsButtons, dialogButtons } from "./newPost.buttons.data";

import { addPost, updatePost } from "../../actions/postActions";

const useNewPost = (classes, posts, authUser, users) => {
  const location = useLocation().pathname;
  const id = useParams().id;
  const navigate = useNavigate();

  const [values, setValues] = useState({
    title: id ? false : "",
    description: id ? false : "",
    level: id ? false : "",
    duration: id ? false : "",
    image: id ? false : "",
    mentor: id ? false : "",
    errors: {},
  });
  const [open, setOpen] = useState(false);
  const post = id && posts.find((o) => o._id === id);

  const clickSave = (e) => {
    const newPost = {
      userId: location.includes("edit")
        ? values.mentor
          ? users.find((user) => user.firstName === values.mentor)._id
          : post.userId
        : authUser.role === "admin" && values.mentor
        ? users.find((user) => user.firstName === values.mentor)._id
        : authUser.role === "admin"
        ? ""
        : authUser._id,
      id: id && id,
      title: values.title === false ? post.title : values.title,
      description:
        values.description === false ? post.description : values.description,
      level: values.level === false ? post.level : values.level,
      duration: values.duration === false ? post.duration : values.duration,
      image: values.image === false ? post.image : values.image,
      mentor: values.mentor === false ? post.mentor : values.mentor,
    };

    if (post)
      updatePost(
        newPost,
        navigate,
        authUser.role === "admin" ? "/posts" : "/",
        users,
        authUser,
        post
      );
    else
      addPost(
        newPost,
        navigate,
        authUser.role === "admin" ? "/posts" : "/",
        authUser
      );
  };

  const clickClose = () => {
    navigate(-1);
  };
  const clickYes = () => {
    navigate("/my/posts");
  };
  const clickNo = () => {
    setOpen(false);
  };

  const fields = values && newPostFields(values, post, classes);
  const areas = values && newPostAreas(values, setValues, classes, post);
  const buttons = newPostsButtons(clickSave, clickClose, classes, post);
  const dButtons = dialogButtons(clickYes, clickNo, classes);
  const completes = newPostCompletes(setValues, values, post, classes, users);

  return {
    values,
    setValues,
    fields,
    areas,
    buttons,
    dButtons,
    open,
    setOpen,
    completes,
    post,
  };
};
export default useNewPost;
