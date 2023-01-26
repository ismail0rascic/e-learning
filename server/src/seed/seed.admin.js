import axios from "axios";
import config from "../config/config.js";
import User from "../models/user.model.js";

const admin = {
  firstName: "paragon",
  lastName: "paragon",
  email: "paragon@paragon.com",
  role: "admin",
  active: true,
  password: "Paragon202!",
  password2: "Paragon202!",
};

export const seedAdmins = async () => {
  User.find().then(async (data) => {
    if (data.length === 0)
      await axios.post(`http://localhost:${config.PORT}/auth/signup`, admin);
  });
};
