import { combineReducers } from "redux";
import React, { Component } from "react";
import { connect } from "react-redux";

export default function TodoApp() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}
