import { signOut } from "../../actions/authActions";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export const getData = (navigate) => {
  const login = {
    name: "Log out",
    icon: <LogoutIcon />,
    func: function () {
      signOut();
    },
  };

  const logout = {
    name: "Log In",
    icon: <LoginIcon />,
    func: function () {
      navigate("/signin");
    },
  };

  return {
    login: login,
    logout: logout,
  };
};
