export const newPostCompletes = (setValues, values, post, classes) => {
  const completes = [
    {
      title: "Level",
      data: ["beginner", "intermediate", "advanced", "all"],
      value: values.level !== false ? values.level : post ? post.level : "",
      class: classes.textField,
      error: values.errors.level,
      changeState: (_) => {
        setValues({ ...values, level: _ });
      },
    },
    {
      title: "Duration",
      data: [
        "0-3 Hours",
        "3-6 Hours",
        "6-12 Hours",
        "1-2 Days",
        "2-5 Days",
        "5-15 Days",
      ],
      value:
        values.duration !== false ? values.duration : post ? post.duration : "",
      class: classes.textField,
      error: values.errors.duration,
      changeState: (_) => {
        setValues({ ...values, duration: _ });
      },
    },
  ];

  return completes;
};
