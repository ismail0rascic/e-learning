export const updateProfileChecks = (values, setValues,user, classes) => {
  const check = {
    label: "Active",
    class: classes.textField,
    error: values.errors.active,
    value: values.active !== "" ? values.active : user ? user.active : "",
    changeState: (_) => {
      values.active
        ? setValues({ ...values, active: false })
        : setValues({ ...values, active: true });
    },
  };

  return check;
};
