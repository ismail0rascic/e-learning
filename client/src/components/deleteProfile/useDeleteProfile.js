import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";

import { deleteProfileFields } from "./deleteProfile.fields";
import { deleteProfileButtons, dialogButtons } from "./deleteProfile.buttons";
import { deleteUser } from "../../actions/userActions";
import { clearError } from "../../actions/errorActions";

const useDeleteProfile = (classes, authUser, signOut) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    password: "",
    errors: {},
  });

  useEffect(() => {
    values.errors.password && setOpen(false);
  }, [values.errors]);

  const clickOk = (e) => {
    if (values.password !== "") {
      clearError();
      setOpen(true);
    } else {
      const errors = { password: "password filed is required" };
      setValues({ ...values, errors: errors });
    }
  };
  const func = () => {
    signOut(navigate);
  };
  const clickClose = () => {
    navigate(-1);
  };

  const dialogOk = (e) => {
    deleteUser({ id: authUser._id, password: values.password }, func);
  };

  const dialogCancel = () => {
    setOpen(false);
  };

  const fields = values && deleteProfileFields(values, classes, authUser);
  const buttons = deleteProfileButtons(clickOk, clickClose, classes);

  const dialogB = dialogButtons(dialogOk, dialogCancel, classes);
  const dialogData = {
    title: "Delete Account",
    text: "Are you sure?",
    icon: <ReportProblemIcon fontSize="large" />,
  };

  return {
    values,
    setValues,
    open,
    setOpen,
    fields,
    buttons,
    dialogB,
    dialogData,
  };
};
export default useDeleteProfile;
