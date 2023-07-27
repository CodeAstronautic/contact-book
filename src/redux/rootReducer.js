import { combineReducers } from "redux";
import AddReducer from "./reducer1";

const rootReducer = combineReducers({ addReducer: AddReducer });

export default rootReducer;
