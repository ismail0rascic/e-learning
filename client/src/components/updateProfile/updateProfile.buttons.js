export const updateProfileButtons = (func1, func2, classes) => {
  const buttons = [
    { title: "UPDATE", func: () => func1(), class: classes.button },
    { title: "GO BACK", func: () => func2(), class: classes.button },
  ];

  return buttons;
};
