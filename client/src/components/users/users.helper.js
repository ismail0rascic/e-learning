/*eslint-disable*/

import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

export const generatePaths = (navigate, deleteUserAdmin) => {
  return [
    {
      title: <CreateIcon />,
      func: (id) => navigate(`/user/edit/${id}`),
    },
    {
      title: <DeleteIcon />,
      func: (id) => {
        deleteUserAdmin(id);
      },
    },
  ];
};
export const generateTableData = (users, paths, returnPath) => {
  let arr = ["FirstName", "LastName", "Role", "Email",""];
  let usersArr = [];
  users.map((user) => {
    usersArr.push([
      user._id,
      user.firstName,
      user.lastName,
      user.email,
      user.role,
    ]);
  });
  let table = [];
  arr.map((title, i) => {
    let elements = [];
    let id = "";
    usersArr.map((user) => {
      i + 1 < arr.length
        ? elements.push(user[i + 1])
        : elements.push(returnPath(paths, user[0]));
      id = user[0] + i;
    });
    table.push({ title: title, elements: elements, id: id });
  });
  return table;
};
