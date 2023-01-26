export const updateProfileFields = (values, classes, user) => {
  const fields = [
    {
      id: "firstName",
      type: "text",
      label: "First Name",
      value:
        values.firstName !== false
          ? values.firstName
          : user
          ? user.firstName
          : "",
      class: classes.textField,
      error: values.errors.firstName,
      changeState: false,
    },
    {
      id: "lastName",
      type: "text",
      label: "Last Name",
      value:
        values.lastName !== false ? values.lastName : user ? user.lastName : "",
      class: classes.textField,
      error: values.errors.lastName,
      changeState: false,
    },
    {
      id: "email",
      type: "text",
      label: "Email",
      value: values.email !== false ? values.email : user ? user.email : "",
      class: classes.textField,
      error: values.errors.email,
      changeState: false,
    },
  ];

  return fields;
};
