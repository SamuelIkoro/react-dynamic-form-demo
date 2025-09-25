import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="entry-form">
      <h2 className="welcome">Hello {name}</h2>
      <Input type="text" placeholder="Username" required="true" />
      <Input type="password" placeholder="Password" required="true" id="pass" />
      {!props.isRegistered ?  <Input type="password" placeholder="Confirm Password" required="true" /> : null}
      <button type="submit">{!props.isRegistered ? "SIGN UP" : "LOGIN"}</button>
      <p>
        <a href="#">{!props.isRegistered ? "Sign up here" : "Sign in here"}</a>
        <span>*Required</span>
      </p>
    </form>
  );
}

export default Form;
