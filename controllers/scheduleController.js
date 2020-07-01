export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

export const guideSearch = (req, res) => {
  const {
    query: { city },
  } = req;
  res.render("guideSearch", { city });
};
export const scheduleSearch = (req, res) => {
  res.render("scheduleSearch");
};
