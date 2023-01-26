import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const getFilters = (filter, setFilter) => {
  return [
    {
      button: "By Course Title",
      icon: <ArrowDropDownIcon />,
      items: [
        {
          name: "A-Z",
          func: function () {
            setFilter({ ...filter, mentor: "", title: "A-Z" });
          },
        },
        {
          name: "Z-A",
          func: function () {
            setFilter({ ...filter, mentor: "", title: "Z-A" });
          },
        },
      ],
    },
    {
      button: "By Mentor Name",
      icon: <ArrowDropDownIcon />,
      items: [
        {
          name: "A-Z",
          func: function () {
            setFilter({ ...filter, title: "", mentor: "A-Z" });
          },
        },
        {
          name: "Z-A",
          func: function () {
            setFilter({ ...filter, title: "", mentor: "Z-A" });
          },
        },
      ],
    },

    {
      button: "Level",
      icon: <ArrowDropDownIcon />,
      items: [
        {
          name: "Beginner",
          func: function () {
            setFilter({ ...filter, level: "beginner" });
          },
        },
        {
          name: "Intermediate",
          func: function () {
            setFilter({ ...filter, level: "intermediate" });
          },
        },
        {
          name: "Advanced",
          func: function () {
            setFilter({ ...filter, level: "advanced" });
          },
        },
        {
          name: "All levels",
          func: function () {
            setFilter({ ...filter, level: "all" });
          },
        },
        {
          name: "clear",
          func: function () {
            setFilter({ ...filter, level: "" });
          },
        },
      ],
    },
    {
      button: "Duration",
      icon: <ArrowDropDownIcon />,
      items: [
        {
          name: "0-3 Hours",
          func: function () {
            setFilter({ ...filter, duration: "0-3 Hours" });
          },
        },
        {
          name: "3-6 Hours",
          func: function () {
            setFilter({ ...filter, duration: "3-6 Hours" });
          },
        },
        {
          name: "6-12 Hours",
          func: function () {
            setFilter({ ...filter, duration: "6-12 Hours" });
          },
        },
        {
          name: "1-2 Days",
          func: function () {
            setFilter({ ...filter, duration: "1-2 Days" });
          },
        },
        {
          name: "2-5 Days",
          func: function () {
            setFilter({ ...filter, duration: "2-5 Days" });
          },
        },
        {
          name: "1-2 Days",
          func: function () {
            setFilter({ ...filter, duration: "5-15 Days" });
          },
        },
        {
          name: "clear",
          func: function () {
            setFilter({ ...filter, duration: "" });
          },
        },
      ],
    },
  ];
};
