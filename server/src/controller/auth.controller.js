import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";

import config from "../config/config.js";
import bcrypt from "bcryptjs";

import validateSignUp from "../validation/signup.validation.js";
import validateSignIn from "../validation/signin.validation.js";

export const signUp = (req, res) => {
  const { errors, isValid } = validateSignUp(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ email: "Email has taken - please enter another email" });
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        role: req.body.role,
        active: req.body.active,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              res.json(user);
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
};

const signIn = (req, res) => {
  const { errors, isValid } = validateSignIn(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ signin: "Wrong credentials!" });
    }
    if (user.active === false) {
      return res
        .status(401)
        .json({ signin: "Admin need to approve your account" });
    }

    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          _id: user._id,
          name: user.name,
        };
        jwt.sign(
          payload,
          config.SECRET_KEY,
          {
            expiresIn: 31556926,
          },
          (err, token) => {
            res.cookie("token", token, { httpOnly: true });
            res.json({
              success: true,
              token: jwt_decode(token),
            });
          }
        );
      } else {
        return res.status(401).json({ signin: "Wrong credentials!" });
      }
    });
  });
};

const signOut = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "User signed out." });
};

export const authorization = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    let id = jwt_decode(token)._id;
    User.findById(id).exec((err, data) => {
      if (data) {
        res.json({
          success: true,
          token: jwt_decode(token),
        });
      } else {
        res.clearCookie("token");
        res.status(200).json({ message: "User not exist." });
      }
    });
  } else {
    res.status(200).json({ message: "User signed out." });
  }
};

export { signIn, signOut };
