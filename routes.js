// 전역 경로

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const GUIDE_SEARCH = "/guide-search";
const SCHEDULE_SEARCH = "/schedule-search";

// 유저 경로
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";

// 스케줄 경로
const SCHEDULES = "/schedules";
const UPLOAD = "/upload";
const SCHEDULE_DETAIL = "/:id";
const EDIT_SCHEDULE = "/:id/edit-schedule";
const DELETE_SCHEDULE = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  guideSearch: GUIDE_SEARCH,
  scheduleSearch: SCHEDULE_SEARCH,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  schedules: SCHEDULES,
  upload: UPLOAD,
  scheduleDetail: (id) => {
    if (id) {
      return `/schedules/${id}`;
    } else {
      return SCHEDULE_DETAIL;
    }
  },
  editSchedule: EDIT_SCHEDULE,
  deleteSchedule: DELETE_SCHEDULE,
};

export default routes;
