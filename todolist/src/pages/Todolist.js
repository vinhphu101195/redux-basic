import React from "react";
import Todo from "../components/todo";
import { connect } from "react-redux";
import { clickToggle } from "../action/index";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

function Todolist(props) {
  return (
    <ul>
      {getVisibleTodos(props.todos, props.visibilityFilter).map((todo, e) => {
        return (
          <Todo
            key={e}
            {...todo}
            onClick={() => props.onTodoClick(todo[0].id)}
          />
        );
      })}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  };
};

// const mapDispatchtoProps = (dispatch, props) => {
//   return {
//     onTodoClick: id => {
//       dispatch(clickToggle(id));
//     }
//   };
// };

export default connect(
  mapStateToProps,
  { onTodoClick: clickToggle }
)(Todolist);
