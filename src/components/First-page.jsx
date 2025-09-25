import React from "react";
import Form from "./Form";

var UserIsRegistered = true;


function FirstPage() {
    return (
        <div className="first-page">
            <Form isRegistered={UserIsRegistered}/>
        </div>
    )
}

export default FirstPage