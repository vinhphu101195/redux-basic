import { combineReducers } from "redux";
import React, { Component } from "react";
import { connect } from "react-redux";

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
const addTodo = (text) =>{
  return{
    type: 'ADD_TODO',
    id:nextTodoId++,
    text: text
  }
}

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="hello"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};




class FilterLink extends Component {
  render() {
    const props = this.props;
    const state = this.props.store.getState();
    return (
      <Link
        active={props.filter === state.visibilityFilter}
        onClick={() =>
          this.props.store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: props.filter
          })
        }
      >
        {props.children}
      </Link>
    );
  }
}

const Footer = () => {
  return (
    <p>
      Show:{" "}
      <FilterLink filter="SHOW_ALL" store={this.props.store}>
        All
      </FilterLink>{" "}
      <FilterLink filter="SHOW_ACTIVE" store={this.props.store}>
        Active
      </FilterLink>{" "}
      <FilterLink filter="SHOW_COMPLETED" store={this.props.store}>
        Completed
      </FilterLink>
    </p>
  );
};

const Todo = ({ onClick, completed, text }) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </li>
  );
};

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        );
      })}
    </ul>
  );
};




let AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );

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

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter) };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      this.props.store.dispatch({
        type: "TOGGLE_TODO",
        id
      });
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default function TodoApp() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

