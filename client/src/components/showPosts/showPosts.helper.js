/*eslint-disable*/

import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

export const generatePaths = (navigate, deletePost) => {
  return [
    {
      title: <CreateIcon />,
      func: (id) => navigate(`/edit/post/${id}`),
    },
    {
      title: <DeleteIcon />,
      func: (id) => {
        deletePost(id);
      },
    },
  ];
};
export const generateTableData = (posts, paths, returnPath, users) => {
  let arr = ["Title", "Mentor", "Description", "Level", "Duration", ""];
  let postsArr = [];
  posts.map((post) => {
    postsArr.push([
      post._id,
      post.title,
      users.length > 0 &&
      posts.length > 0 &&
      users.find((o) => o._id === post.userId)
        ? users.find((o) => o._id === post.userId).firstName
        : post.userId,
      post.description,
      post.level,
      post.duration,
    ]);
  });
  let table = [];
  arr.map((title, i) => {
    let elements = [];
    let id = "";
    postsArr.map((post) => {
      i + 1 < arr.length
        ? elements.push(post[i + 1])
        : elements.push(returnPath(paths, post[0]));
      id = post[0] + i;
    });
    table.push({ title: title, elements: elements, id: id });
  });
  return table;
};
