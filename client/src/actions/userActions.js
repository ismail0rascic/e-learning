import { SET_CURRENT_USER, GET_USERS, GET_AUTH_USER } from "./types";
import { updateOne, getAll, deleteOne, getById } from "./basicActions";
import axios from "axios";
import { baseUrl } from "../config";
import { getError } from "./errorActions";

export const getUser = (id) => {
  getById("api/users/", GET_AUTH_USER, id);
};

export const getAllUsers = () => {
  getAll("api/users", GET_USERS);
};

export const updateUser = (userData, func, link, auth) => {
  const f = () => {
    func(link);
    auth && getUser(auth);
    getAllUsers();
  };
  updateOne("api/users/", userData, f);
};

export const deleteUser = async (userData, func) => {
  await updateOne("api/delete/", userData, func);
};
export const deleteUserAdmin = async (id) => {
  await deleteOne("api/users/", id, getAllUsers);
};

export const addCourse = (userData, authUser) => {
  axios
    .put(baseUrl + "api/course", userData)
    .then((res) => {
      authUser.role !== "admin" && getUser(userData.userId);
    })
    .catch((err) => {
      getError(err);
    });
};

export const removeCourse = (userData, authUser) => {
  axios
    .put(baseUrl + "api/remove", userData)
    .then((res) => {
      authUser.role !== "admin" && getUser(userData.userId);
    })
    .catch((err) => {
      getError(err);
    });
};

export const addComplete = (userData) => {
  axios
    .put(baseUrl + "api/completed", userData)
    .then((res) => {
      getUser(userData.userId);
    })
    .catch((err) => {
      getError(err);
    });
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
