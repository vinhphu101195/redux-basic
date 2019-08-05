import { v4 } from "node-uuid";

//v4 for create a id
export const addTodo = text => {
  return {
    type: "ADD_TODO",
    id: v4(),
    text
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
};

export const clickToggle = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};
