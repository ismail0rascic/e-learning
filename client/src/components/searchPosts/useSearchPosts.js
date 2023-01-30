import { useState } from "react";
import { useEffect } from "react";

const useSearchPosts = (search, posts, searchTerm) => {
  const [term, setTerm] = useState(search.term);
  const [filters, setFilters] = useState({
    level: [],
    duration: [],
  });

  useEffect(() => {
    setTerm(search.term);
    // eslint-disable-next-line
  }, [search.run]);

  useEffect(() => {
    return () => {
      searchTerm("");
    }; // eslint-disable-next-line
  }, []);

  const searchedPosts =
    posts.length > 0 && term
      ? posts
          .map((post) => post.title.includes(term) && post)
          .filter((post) => post)
      : posts;

  const filterPosts = () => {
    if (filters.level.length > 0 && filters.duration.length > 0) {
      return searchedPosts.map(
        (post) =>
          filters.level.includes(post.level) &&
          filters.duration.includes(post.duration) &&
          post
      );
    } else if (filters.level.length > 0) {
      return searchedPosts.map(
        (post) => filters.level.includes(post.level) && post
      );
    } else if (filters.duration.length > 0) {
      return searchedPosts.map(
        (post) => filters.duration.includes(post.duration) && post
      );
    } else return searchedPosts;
  };

  let filtered = filterPosts();

  return { filters, setFilters, filtered };
};
export default useSearchPosts;
