import _ from "lodash";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const getAllUsers = (req, res) => {
  User.find().then((data, err) => {
    res.status(200).json(data);
  });
};

export const getUsers = (req, res) => {
  const id = req.params.id;
  User.find({ _id: id }).then((data, err) => {
    res.status(200).json(data);
  });
};

export const updateUser = (req, res) => {
  const id = req.body.id;
  User.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Item not found");
    }
    const user = _.extend(data, req.body);
    user.save((err, data) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      res.status(200).json(data);
    });
  });
};
export const deleteUser = (req, res) => {
  const id = req.params.id;
  User.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Item not found");
    }
    bcrypt.compare(req.body.password, data.password).then((isMatch) => {
      if (isMatch) {
        data.remove((err, data) => {
          if (err || !data) {
            return res.status(404).json(err.message);
          }

          res.status(200).json("Item deleted.");
        });
      } else {
        return res.status(400).json({ password: "password is incorrect" });
      }
    });
  });
};

export const deleteUserAdmin = (req, res) => {
  const id = req.params.id;
  User.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Item not found");
    }
    data.remove((err, data) => {
      if (err || !data) {
        return res.status(404).json(err.message);
      }
      res.status(200).json("Item deleted.");
    });
  });
};

export const addCourse = async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      req.body.userId,
      { $push: { courses: req.body.postId } },
      { new: true }
    );
    res.json(result);
  } catch (err) {
    return res.status(400).json({
      error: "request is sended",
    });
  }
};

export const addCompleted = async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      req.body.userId,
      { $push: { completed: req.body.postId } },
      { new: true }
    );
    res.json(result);
  } catch (err) {
    return res.status(400).json({
      error: "request is sended",
    });
  }
};
