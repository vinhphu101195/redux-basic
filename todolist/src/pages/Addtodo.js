import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../action/index";

class Addtodo extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
    console.log(this.state.text);

    return (
      <div>
        <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.onChange}
        />
        <button
          onClick={() => {
            this.props.onAddTodo(this.state.text);
            this.setState({
              text: ""
            });
          }}
        >
          Add Todo
        </button>
      </div>
    );
  }
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
