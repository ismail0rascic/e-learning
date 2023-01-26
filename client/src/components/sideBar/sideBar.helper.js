import HomeIcon from "@material-ui/icons/Home";
import LoginIcon from "@mui/icons-material/Login";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";

export const createItems = (navigate, signOut, authUser) => {
  return [
    {
      label: "Dashboard",
      icon: <HomeIcon />,
      func: () => {
        navigate(
          authUser.role === "admin"
            ? "/admin"
            : authUser.role === "mentor"
            ? "/mentor"
            : authUser.role === "student" && "/student"
        );
      },
    },
    authUser.role === "admin" && {
      label: "Users",
      icon: <PeopleAltIcon />,
      func: () => {
        navigate("/users");
      },
    },
    authUser.role === "admin" && {
      label: "Courses",
      icon: <ViewInArIcon />,
      func: () => {
        navigate("/posts");
      },
    },
    {
      label: "Edit Profile",
      icon: <SettingsIcon />,
      func: () => {
        navigate("/profile");
      },
    },
    {
      label: "Log Out",
      icon: <LoginIcon />,
      func: () => {
        signOut(navigate);
      },
    },
  ];
};
