import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { updateProfileFields } from "./updateProfile.fields";
import { updateProfileButtons } from "./updateProfile.buttons";

import { updateUser } from "../../actions/userActions";
import { updateProfileCompletes } from "./updateProfile.completes";
import { updateProfileChecks } from "./updateProfile.check";

const useNewPost = (classes, users, authUser) => {
  const id = useParams().id;
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: false,
    lastName: false,
    email: false,
    image: false,
    role: false,
    active: "",
    errors: {},
  });

  const editUser = id ? users.find((o) => o._id === id) : authUser;
  const clickSave = (e) => {
    const newUser = {
      id: id ? id : editUser._id,
      firstName:
        values.firstName === false ? editUser.firstName : values.firstName,
      lastName: values.lastName === false ? editUser.lastName : values.lastName,
      image: values.image === false ? editUser.image : values.image,
      email: values.email === false ? editUser.email : values.email,
      role: values.role === false ? editUser.role : values.role,
      active: values.active === "" ? editUser.active : values.active,
    };
    updateUser(
      newUser,
      navigate,
      authUser.role === "admin" ? "/users" : `/${authUser.role}`,
      !id && authUser._id
    );
  };
  const clickClose = () => {
    navigate(authUser.role === "admin" ? "/users" : `/${authUser.role}`);
  };
  const fields = values && updateProfileFields(values, classes, editUser, id);
  const buttons = updateProfileButtons(clickSave, clickClose, classes);
  const completes = updateProfileCompletes(
    setValues,
    values,
    editUser,
    classes
  );
  const check = updateProfileChecks(values, setValues, editUser, classes);

  return { values, setValues, fields, buttons, completes, check, id, editUser };
};
export default useNewPost;
