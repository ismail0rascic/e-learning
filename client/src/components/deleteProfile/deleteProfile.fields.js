export const deleteProfileFields = (values, classes, user) => {
  const fields = {
    id: "password",
    type: "password",
    label: "Password",
    value: values.password,
    class: classes.textField,
    error: values.errors.password,
  };

  return fields;
};
