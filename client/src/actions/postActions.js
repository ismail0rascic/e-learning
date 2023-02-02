import { GET_POST } from "./types";
import { getAll, addOne, updateOne } from "./basicActions";
import { addCourse, removeCourse } from "./userActions";

export const getPost = () => {
  getAll("api/post", GET_POST);
};

export const addPost = async (userData, func, link, authUser) => {
  const f = (data) => {
    addCourse(
      {
        userId: data.userId,
        postId: data._id,
      },
      authUser
    );

    func(link);
    getPost();
  };
  addOne("api/post", userData, f);
};

export const updatePost = async (
  userData,
  func,
  link,
  users,
  authUser,
  post
) => {
  const f = () => {
    if (post && post.userId !== userData.userId) {
      removeCourse({
        userId: post.userId,
        postId: post._id,
      });
    }
    const u = users.find((user) => user._id === userData.userId);
    if (!u.courses.includes(userData.id)) {
      addCourse(
        {
          userId: userData.userId,
          postId: userData.id,
        },
        authUser
      );
    }
    func(link);
    getPost();
  };
  updateOne("api/post/", userData, f);
};

export const deletePost = async (id, navigate) => {
  const func = (data) => {
    removeCourse({
      userId: data.userId,
      postId: data._id,
    });
    getPost();
    navigate && navigate("/mentor");
  };
  await updateOne(
    "api/del/",
    {
      id: id,
      deleted: true,
    },
    func
  );
};
