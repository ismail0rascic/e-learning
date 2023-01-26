import _ from "lodash";
import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import validatePasswordChange from "../validation/passwordChange.validation.js";

const change = (data, req, res) => {
  const user = _.extend(data, req.body);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(data.password, salt, (err, hash) => {
      if (err) throw err;
      user.password = hash;
      user
        .save()
        .then((user) => {
          res.json(user);
        })
        .catch((err) => console.log(err));
    });
  });
};

export const changePassword = async (req, res) => {
  const { errors, isValid } = validatePasswordChange(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.body.id;
  User.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Item not found");
    }
    if (req.body.oldPassword === false) {
      change(data, req, res);
    } else {
      bcrypt.compare(req.body.oldPassword, data.password).then((isMatch) => {
        if (isMatch) {
          change(data, req, res);
        } else {
          return res
            .status(400)
            .json({ oldPassword: "Old password is incorrect" });
        }
      });
    }
  });
};
