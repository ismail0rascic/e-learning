export const signupButtons = (func2) => {
  const buttons = [
    {
      title: "SUBMIT",
      func: () => func2(),
      color: "secondary",
    },
  ];

  return buttons;
};
