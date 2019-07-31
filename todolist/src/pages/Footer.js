import React, { Component } from "react";
import Link from "../components/Link";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../action/index";

class FilterLink extends Component {
  render() {
    const props = this.props;

    return (
      <Link
        active={props.filter === props.visibilityFilter}
        onClick={() => this.props.onSetvisibility(props.filter)}
      >
        {props.children}
      </Link>
    );
  }
}

function Footer(props) {
  return (
    <p>
      Show:{" "}
      <FilterLink
        filter="SHOW_ALL"
        visibilityFilter={props.visibilityFilter}
        onSetvisibility={props.onSetvisibility}
      >
        All
      </FilterLink>{" "}
      <FilterLink
        filter="SHOW_ACTIVE"
        visibilityFilter={props.visibilityFilter}
        onSetvisibility={props.onSetvisibility}
      >
        Active
      </FilterLink>{" "}
      <FilterLink
        filter="SHOW_COMPLETED"
        visibilityFilter={props.visibilityFilter}
        onSetvisibility={props.onSetvisibility}
      >
        Completed
      </FilterLink>
    </p>
  );
}

const mapStateToProps = state => {
  return {
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchtoProps = (dispatch, props) => {
  return {
    onSetvisibility: filter => {
      dispatch(setVisibilityFilter(filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Footer);
