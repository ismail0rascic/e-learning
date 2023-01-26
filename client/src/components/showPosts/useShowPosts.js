import { IconButton } from "@material-ui/core";
import { generateTableData, generatePaths } from "./showPosts.helper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPost, deletePost } from "../../actions/postActions";

const useShowPosts = (users, posts) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    title: "",
    mentor: "",
    level: "",
    duration: "",
  });

  useEffect(() => {
    getPost();
  }, []);

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

  const paths = generatePaths(navigate, deletePost);

  const filterUser = () => {
    if (filter.level && filter.duration)
      return posts.map(
        (post) =>
          post.level === filter.level &&
          post.duration === filter.duration &&
          post
      );
    else if (filter.duration)
      return posts.map((post) => post.duration === filter.duration && post);
    else if (filter.level)
      return posts.map((post) => post.level === filter.level && post);
    else return posts;
  };

  const filtered = filterUser().filter((o) => o);
  const sortUser = () => {
    const sort = [];
    filtered.map((post) =>
      sort.push({
        ...post,
        mentor: users.find((o) => o._id === post.userId)
          ? users.find((o) => o._id === post.userId).firstName
          : "",
      })
    );
    if (filter.title === "A-Z")
      return sort.sort((a, b) => a.title.localeCompare(b.title));
    else if (filter.title === "Z-A")
      return sort.sort((a, b) => b.title.localeCompare(a.title));
    else if (filter.mentor === "A-Z")
      return sort.sort((a, b) => a.mentor.localeCompare(b.mentor));
    else if (filter.mentor === "Z-A")
      return sort.sort((a, b) => b.mentor.localeCompare(a.mentor));
    else return filtered;
  };
  const sorted = sortUser();

  let data =
    posts.length >= 0 && generateTableData(sorted, paths, returnPath, users);

  return { filter, setFilter, data, navigate };
};
export default useShowPosts;
