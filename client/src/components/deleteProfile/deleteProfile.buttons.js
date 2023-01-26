export const deleteProfileButtons = (func1, func2, classes) => {
  const buttons = [
    { title: "OK", func: () => func1(), class: classes.button },
    { title: "CANCEL", func: () => func2(), class: classes.button },
  ];

  return buttons;
};

export const dialogButtons = (func1, func2, classes) => {
    const buttons = [
      { title: "OK", func: () => func1(), class: classes.button },
      { title: "CANCEL", func: () => func2(), class: classes.button },
    ];
  
    return buttons;
  };