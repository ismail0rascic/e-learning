import { getFilters } from "./helper";
import Filters from "../basic/Filters";

const PostsFilters = ({ filter, setFilter }) => {
  const filters = getFilters(filter, setFilter);

  return (
    <Filters
      filters={ filters}
    />
  );
};
export default PostsFilters;
