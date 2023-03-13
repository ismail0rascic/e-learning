import { useNavigate, useParams } from "react-router-dom";
import { dialogButtons } from "../deleteProfile/deleteProfile.buttons";
import { deletePost } from "../../actions/postActions";
import { useState } from "react";
import useStyles from "../../styles/style";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { useEffect } from "react";

const usePostDelete = (posts) => {
  const id = useParams().id;
  const post = id && posts && posts.find((o) => o._id === id);
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const dialogOk = (e) => {
    deletePost(post._id, navigate);
  };

  useEffect(() => {
    !open && navigate("/posts");
    // eslint-disable-next-line
  }, [open]);
  const dialogCancel = () => {
    setOpen(false);
  };
  const dialogB = dialogButtons(dialogOk, dialogCancel, classes);
  const dialogData = {
    title: "Delete Account",
    text: "Are you sure?",
    icon: <ReportProblemIcon fontSize="large" />,
  };

  return { post, setOpen, open, dialogB, dialogData };
};

export default usePostDelete;
