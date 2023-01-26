import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAllUsers, deleteUserAdmin } from "../../actions/userActions";
import { generateTableData, generatePaths } from "./users.helper";

import { IconButton } from "@material-ui/core";

const useUsers = (users) => {
  const [filter, setFilter] = useState({
    firstName: "",
    lastName: "",
    role: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, []);

  const paths = generatePaths(navigate, deleteUserAdmin);

  const returnPath = (paths, id) => {
    return (
      <>
        <IconButton onClick={() => paths[0].func(id)}>
          {paths[0].title}
        </IconButton>
        <IconButton onClick={() => paths[1].func(id)}>
          {paths[1].title}
        </IconButton>
      </>
    );
  };

  const filterUser = () => {
    if (filter.role)
      return users.map((user) => user.role === filter.role && user);
    else return users;
  };

  const filtered = filterUser().filter((o) => o);
  const sortUser = () => {
    if (filter.firstName === "A-Z")
      return filtered.sort((a, b) => a.firstName.localeCompare(b.firstName));
    else if (filter.firstName === "Z-A")
      return filtered.sort((a, b) => b.firstName.localeCompare(a.firstName));
    else if (filter.lastName === "A-Z")
      return filtered.sort((a, b) => a.lastName.localeCompare(b.lastName));
    else if (filter.lastName === "Z-A")
      return filtered.sort((a, b) => b.lastName.localeCompare(a.lastName));
    else return filtered;
  };
  const sorted = sortUser().filter((user) => user.role !== "admin");

  let data = users.length >= 0 && generateTableData(sorted, paths, returnPath);

  return { data, filter, setFilter, navigate };
};
export default useUsers;
