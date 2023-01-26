import { GET_POST, REFRESH_POST } from "./types";
import { getAll, addOne, updateOne, deleteOne, refresh } from "./basicActions";

export const getPost = () => {
  getAll("api/post", GET_POST);
};

export const addPost = async (userData, func, link) => {
  const f = () => {
    func(link);
    getPost();
  };
  addOne("api/post", userData, f);
};

export const updatePost = async (userData, func, link) => {
  const f = () => {
    func(link);
    getPost();
  };
  updateOne("api/post/", userData, f);
};

export const deletePost = async (id, navigate) => {
  const func = () => {
    getPost();
    navigate && navigate("/mentor");
  };
  await deleteOne("api/post/", id, func);
};

export const refreshPost = (data) => {
  refresh(data, REFRESH_POST);
};
