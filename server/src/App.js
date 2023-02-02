import bodyParser from "body-parser";
import express from "express";
import passport from "passport";
import cookies from "cookie-parser";

import("./config/passport.js");

import auth from "./routes/auth.router.js";
import user from "./routes/user.router.js";
import post from "./routes/post.router.js";
import upload from "./routes/upload.router.js";
import password from "./routes/password.router.js";

import cors from "cors";
import { seedAdmins } from "./seed/seed.admin.js";
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(cookies());

app.use(bodyParser.json());
app.use("/", auth);
app.use("/", user);
app.use("/", post);
app.use("/", upload);
app.use("/", password);

seedAdmins();
export default app;
