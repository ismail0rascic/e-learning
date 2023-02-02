export const postCheck = (setCompleted, user, post, classes) => {
  const check = {
    label: "Completed",
    class: classes.textField,
    value: user && user.completed.includes(post._id),
    disabled: (user && user.completed.includes(post._id)) || post.deleted,
    changeState: (_) => {
      setCompleted(true);
    },
  };

  return check;
};
