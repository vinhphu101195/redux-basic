import React, { Component } from "react";
import Link from "../components/Link";

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

export default function Footer() {
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
}
