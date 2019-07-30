import { combineReducers } from "redux";
import React, { Component } from "react";

const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      } else {
        return { ...state, completed: !state.completed };
      }

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(el => {
        return todo(el, action);
      });
    default:
      return state;
  }
};

const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export const todoApp = combineReducers({
  todos,
  visibilityFilter
});

let nextTodoId = 0;

export default class TodoApp extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            store.dispatch({
              type: "ADD_TODO",
              text: "TEST",
              id: nextTodoId++
            });
          }}
        >
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo => {
            return <li key={todo.id}>{todo.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}
