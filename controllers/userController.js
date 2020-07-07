import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join");
};
export const postJoin = (req, res) => {
  const {
    body: { email, password, passwordCheck, name },
  } = req;
  if (password !== passwordCheck) {
    res.status(400);
    res.render("join", { email, password, passwordCheck, name });
  } else {
    // To do: 사용자 등록하기, 사용자 로그인하기
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("login");
};
export const postLogin = (req, res) => {
  const {
    body: { email, password },
  } = req;
  console.log(req.body);

  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To do:유저 로그아웃 처리하기
  res.redirect(routes.home);
};
export const editProfile = (req, res) => {
  res.render("editProfile");
};
export const userDetail = (req, res) => {
  res.render("userDetail");
};
