export const getButtons = (navigate, classes) => {
  return {
    title: "SIGN IN",
    class: classes.button,
    func: () => {
      navigate("/siging");
    },
  };
};
