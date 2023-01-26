export const newPostAreas = (values, setValues, classes, post) => {
  const areas = {
    id: "description",
    type: "text",
    label: "Description",
    value:
      values.description !== false
        ? values.description
        : post
        ? post.description
        : "",
    onChange: (_) => {
      setValues({ ...values, description: _ });
    },
    class: classes.textField,
    error: values.errors.description,
  };
  return areas;
};
