export const signupFieldsData = (values, classes) => {
  const fields = [
    {
      id: "firstName",
      type: "text",
      label: "First Name",
      value: values.firstName,
      class: classes.textField,
      error: values.errors.firstName,
    },
    {
      id: "lastName",
      type: "text",
      label: "Last Name",
      value: values.lastName,
      class: classes.textField,
      error: values.errors.lastName,
    },
    {
      id: "email",
      type: "email",
      label: "Email",
      value: values.email,
      class: classes.textField,
      error: values.errors.email,
    },
    {
      id: "password",
      type: "password",
      label: "Password",
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
