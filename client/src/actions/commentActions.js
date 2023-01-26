import { GET_COMMENT, REFRESH_COMMENT } from "./types";

import { addOne, getById, refresh } from "./basicActions";

export const getComment = (id) => {
  getById("comment", "api/comment/", GET_COMMENT, id);
};

export const addComment = async (userData, func, message) => {
  const f = () => {
    getComment(userData.blogId);
    func();
    message();
  };

  let res = await addOne("api/comment", userData, f);
  return res;
};

export const refreshComment = (data) => {
  refresh(data, REFRESH_COMMENT);
};
