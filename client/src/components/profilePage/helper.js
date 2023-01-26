import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const getData = (navigate, location, id) => {
  return {
    button: "Profile",
    icon: <ArrowDropDownIcon />,
    items: [
      {
        name: "Edit Profile",
        func: function () {
          id ? navigate("/user/edit/" + id) : navigate("/profile");
        },
      },
      {
        name: "New password",
        func: function () {
          id ? navigate("/user/password/" + id) : navigate("/profile/password");
        },
      },
      !id && {
        name: "Delete",
        func: function () {
          navigate("/profile/delete");
        },
      },
    ],
  };
};
