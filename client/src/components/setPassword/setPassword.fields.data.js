export const setPasswordFields = (values, classes) => {
  const fields = [
    {
      id: "oldPassword",
      type: "password",
      label: "Old password",
      value: values.oldPassword,
      class: classes.textField,
      error: values.errors.oldPassword,
    },

    {
      id: "password",
      type: "password",
      label: "New password",
      value: values.password,
      class: classes.textField,
      error: values.errors.password,
    },
    {
      id: "password2",
      type: "password",
      label: "Confirm Password",
      class: classes.textField,
      value: values.password2,
      error: values.errors.password2,
    },
  ];
  return fields;
};
