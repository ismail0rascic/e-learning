export const newPostFields = (values, post, classes) => {
  const fields = {
    id: "title",
    type: "text",
    label: "Title",
    value: values.title !== false ? values.title : post ? post.title : "",
    class: classes.textField,
    error: values.errors.title,
    changeState: false,
  };

  return fields;
};
