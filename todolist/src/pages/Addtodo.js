import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../action/index";

function Addtodo(props) {
  let input = "";
  console.log(input.value);

  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          props.onAddTodo(input.value);
          input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchtoProps = (dispatch, props) => {
  return {
    onAddTodo: text => {
      dispatch(addTodo(text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Addtodo);
