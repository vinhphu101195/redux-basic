import React from "react";

export default function todo(props) {
  console.log(props);

  console.log(props[0].text);

  return (
    <li
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? "line-through" : "none"
      }}
    >
      {props[0].text}
    </li>
  );
}
