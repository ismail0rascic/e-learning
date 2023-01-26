import _ from "lodash";
import Comment from "../models/comment.model.js";
import validateComment from "../validation/validate.comment.js";

export const getComments = (req, res) => {
  const id = req.params.id;
  Comment.find({ blogId: id }).then((data, err) => {
    res.status(200).json(data);
  });
};

export const addComment = (req, res) => {
  const { errors, isValid } = validateComment(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newComment = new Comment({
    user: req.body.user,
    text: req.body.text,
    blogId: req.body.blogId,
  });

  newComment
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
};
