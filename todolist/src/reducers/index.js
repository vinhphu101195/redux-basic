import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

const appReducers = combineReducers({
  visibilityFilter,
  todos
});

export default appReducers;
