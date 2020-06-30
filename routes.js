// 전역 경로

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// 유저 경로
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// 스케줄 경로
const SCHEDULES = "/schedules";
const UPLOAD = "/upload";
const SCHEDULE_DETAIL = "/:id";
const EDIT_SCHEDULE = "/:id/edit";
const DELETE_SCHEDULE = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  schedules: SCHEDULES,
  upload: UPLOAD,
  scheduleDetail: SCHEDULE_DETAIL,
  editSchedule: EDIT_SCHEDULE,
  deleteSchedule: DELETE_SCHEDULE,
};

export default routes;
