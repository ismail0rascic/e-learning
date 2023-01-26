import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { signUp } from "../../actions/authActions";
import { signupFieldsData } from "./signup.fields.data";
import { signupButtons } from "./signup.buttons.data";

const useSignup = (classes, auth) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    errors: {},
  });
  useEffect(() => {
    if (auth.isAuthenticated && location === "/signup") {
      navigate("/");
    }
  });

  const clickSave = (e) => {
    const newUser = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      password2: values.password2,
    };
    signUp(newUser, navigate, location !== "/signiup" ? "/users" : "/");
  };

  const fields = signupFieldsData(values, classes);
  const buttons = signupButtons(clickSave, classes);

  return { fields, buttons, values, setValues, location };
};

export default useSignup;
