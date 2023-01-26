import { getFilters } from "./helper";
import Filters from "../basic/Filters";

const UsersFilters = ({ filter, setFilter }) => {
  const filters = getFilters(filter, setFilter);

  return <Filters filters={filters}  />;
};
export default UsersFilters;
