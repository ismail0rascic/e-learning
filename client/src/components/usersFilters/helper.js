import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const getFilters = (filter, setFilter) => {
  return [
    {
      button: "By FirstName",
      icon: <ArrowDropDownIcon />,
      items: [
        {
          name: "A-Z",
          func: function () {
            setFilter({ ...filter, lastName: "", firstName: "A-Z" });
          },
        },
        {
          name: "Z-A",
          func: function () {
            setFilter({ ...filter, lastName: "", firstName: "Z-A" });
          },
        },
      ],
    },
    {
      button: "By LastName",
      icon: <ArrowDropDownIcon />,
      items: [
        {
          name: "A-Z",
          func: function () {
            setFilter({ ...filter, firstName: "", lastName: "A-Z" });
          },
        },
        {
          name: "Z-A",
          func: function () {
            setFilter({ ...filter, fistName: "", lastName: "Z-A" });
          },
        },
      ],
    },

    {
      button: "All",
      icon: <ArrowDropDownIcon />,
      items: [
        {
          name: "All",
          func: function () {
            setFilter({ ...filter, role: false });
          },
        },
        {
          name: "Mentor",
          func: function () {
            setFilter({ ...filter, role: "mentor" });
          },
        },
        {
          name: "Student",
          func: function () {
            setFilter({ ...filter, role: "student" });
          },
        },
      ],
    },
  ];
};
