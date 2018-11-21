import { combineReducers } from "redux";
import asyncReducer from "../reducers/asyncReducer.js";

const rootReducer = combineReducers({
  apiData: asyncReducer
});

export default rootReducer;
