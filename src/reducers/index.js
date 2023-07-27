import { combineReducers } from "redux";
import { cantactReducer } from "./contactReducers";

export default combineReducers({
  contact: cantactReducer
});
