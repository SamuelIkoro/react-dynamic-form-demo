import React from "react";

function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} required={props.required} className="input"/>;
}

export default Input;