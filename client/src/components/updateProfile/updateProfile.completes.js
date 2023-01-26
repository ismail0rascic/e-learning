export const updateProfileCompletes = (setValues, values, user, classes) => {
  const completes = {
    title: "Role",
    data: ["student", "mentor", "admin"],
    value: values.role !== false ? values.role : user ? user.role : "",
    class: classes.textField,
    error: values.errors.role,
    changeState: (_) => {
      setValues({ ...values, role: _ });
    },
  };

  return completes;
};
