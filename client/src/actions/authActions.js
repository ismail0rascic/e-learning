import axios from "axios";
import store from "../store";

import { getError, clearError } from "./errorActions";
import { REFRESHED } from "./types";
import { getUser, setCurrentUser } from "./userActions";

export const signUp = (userData, navigate, link) => {
  axios
    .post("/auth/signup", userData)
    .then((res) => {
      navigate(link);
    })
    .catch((err) => getError(err));
};

export const signIn = (userData) => {
  axios
    .post("auth/signin", userData)
    .then((res) => {
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
    navigate("/posts");
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
