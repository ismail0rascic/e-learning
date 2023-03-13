import axios from "axios";
import store from "../store";

import { getError, clearError } from "./errorActions";
import { GET_AUTH_USER, REFRESHED } from "./types";
import { getUser, setCurrentUser } from "./userActions";

import { baseUrl } from "../config";

export const signUp = (userData, navigate, link) => {
  axios
    .post(baseUrl + "auth/signup", userData)
    .then((res) => {
      navigate(link);
    })
    .catch((err) => getError(err));
};

export const signIn = (userData) => {
  axios
    .post("/auth/signin", userData, { withCredentials: true })
    .then((res) => {
      console.log(res);
      store.dispatch(setCurrentUser(res.data.token));
      getUser(res.data.token._id);
      clearError();
    })
    .catch((err) => {
      getError(err);
    });
};

export const signOut = (navigate) => {
  axios.post("/auth/signout").then(() => {
    store.dispatch(setCurrentUser({}));
    store.dispatch({
      type: GET_AUTH_USER,
      payload: [false],
    });
    navigate("/");
  });
};

export const refreshAuth = () => {
  axios.get("/auth/refresh").then((res) => {
    if (res.data.message)
      store.dispatch({
        type: REFRESHED,
      });
    else {
      store.dispatch(setCurrentUser(res.data.token));
    }

    clearError();
  });
};
