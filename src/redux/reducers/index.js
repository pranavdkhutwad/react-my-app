import { combineReducers } from "redux";
import scores from "./scores";
import students from "./students";
import teachers from "./teachers";
import login from "./login";

export default combineReducers({
  scores,
  students,
  teachers,
  login,
});
