import routes from "../routes";
import { schedules } from "../db";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", schedules });
};

export const guideSearch = (req, res) => {
  const {
    query: { city },
  } = req;
  res.render("guideSearch", { city });
};
export const scheduleSearch = (req, res) => {
  const {
    query: { city },
  } = req;
  res.render("scheduleSearch", { schedules, searchingBy: city });
};
export const getUpload = (req, res) => {
  res.render("upload");
};
export const postUpload = (req, res) => {
  const {
    body: { name },
  } = req;
  console.log(req.body);
  //To do: 게시글 업로드하고 데이터베이스에 저장하기 + 해당 게시글 아이디 property를 scheduleDetail로 전달하기
  res.redirect(routes.scheduleDetail(11));
};

export const scheduleDetail = (req, res) => {
  res.render("scheduleDetail");
};
export const editSchedule = (req, res) => {
  res.render("editSchedule");
};
