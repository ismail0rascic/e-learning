export const setPasswordButtons = (func1, func2, classes) => {
  const buttons = [
    { title: "SAVE", func: () => func1(), class: classes.button },
    { title: "CANCEL", func: () => func2(), class: classes.button },
  ];

  return buttons;
};
