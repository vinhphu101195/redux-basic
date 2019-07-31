import React from "react";
import Todo from "../components/todo";

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

export default function Todolist() {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        );
      })}
    </ul>
  );
}
