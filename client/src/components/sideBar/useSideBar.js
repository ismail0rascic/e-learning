import { useNavigate } from "react-router-dom";

import { signOut } from "../../actions/authActions";
import { createItems } from "./sideBar.helper";

const useSideBar = (authUser) => {
  const navigate = useNavigate();

  const items = createItems(navigate, signOut, authUser);

  return { items };
};

export default useSideBar;
