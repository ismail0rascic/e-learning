export const searchFiltersDuration = (filters, setFilter) => {
  let durations = [
    "0-3 Hours",
    "3-6 Hours",
    "6-12 Hours",
    "1-2 Days",
    "2-5 Days",
    "5-15 Days",
  ];
  let checks = [];
  durations.map((duration) => {
    checks.push({
      label: duration,
      value: duration,
      values: filters.duration,
      changeState: (_) => {
        filters.duration.includes(_)
          ? setFilter({
              ...filters,
              duration: filters.duration.filter((filter) => filter !== _),
            })
          : setFilter({ ...filters, duration: [...filters.duration, _] });
      },
    });
  });

  return checks;
};

export const searchFiltersLevel = (filters, setFilter) => {
  let levels = ["beginner", "intermediate", "advanced", "all"];
  let checks = [];

  levels.map((level) => {
    checks.push({
      label: level,
      value: level,
      values: filters.level,
      changeState: (_) => {
        filters.level.includes(_)
          ? setFilter({
              ...filters,
              level: filters.level.filter((filter) => filter !== _),
            })
          : setFilter({ ...filters, level: [...filters.level, _] });
      },
    });
  });

  return checks;
};
