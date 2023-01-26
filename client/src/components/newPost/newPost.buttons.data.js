export const newPostsButtons = (func1, func2, classes, post) => {
  const buttons = [
    {
      title: post ? "UPDATE" : "CREATE",
      func: () => func1(),
      class: classes.button,
    },
    { title: "Cancel", func: () => func2(), class: classes.button },
  ];

  return buttons;
};

export const dialogButtons = (func1, func2, classes) => {
  const buttons = [
    {
      title: "YES",
      func: () => func1(),
      class: classes.button,
      color: "green",
    },
    { title: "NO", func: () => func2(), class: classes.button, color: "red" },
  ];

  return buttons;
};
