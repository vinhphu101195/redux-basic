import React from "react";

export default function Link(props) {
  if (props.active) {
    return <span>{props.children}</span>;
  }
  return (
    <a
      href="hello"
      onClick={e => {
        e.preventDefault();
        props.onClick();
      }}
    >
      {props.children}
    </a>
  );
}
