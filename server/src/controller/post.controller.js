import _ from "lodash";
import Post from "../models/post.model.js";
import validatePost from "../validation/validate.post.js";

export const getPosts = (req, res) => {
  Post.find().then((data, err) => {
    res.status(200).json(data);
  });
};

export const addPost = (req, res) => {
  const { errors, isValid } = validatePost(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newPost = new Post({
    userId: req.body.userId,
    title: req.body.title,
    description: req.body.description,
    level: req.body.level,
    duration: req.body.duration,
    image: req.body.image,
    mentor: req.body.mentor,
  });

  newPost
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};

export const updatePost = (req, res) => {
  const id = req.params.id;
  Post.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Item not found");
    }
    const Post = _.extend(data, req.body);
    Post.save((err, data) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      res.status(200).json(data);
    });
  });
};

export const deletePost = (req, res) => {
  const id = req.params.id;
  Post.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Item not found");
    }
    const Post = _.extend(data, req.body);
    Post.save((err, data) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      res.status(200).json(data);
    });
  });
};
