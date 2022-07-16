import React from "react";
import InputField1 from "../InputField1";
import InputField2 from "../InputField2";
import RegisterButton from "../RegisterButton";
import "../style1.css";
function LoginForm()
{
    return (
        <div>
        <form className="formclass1 form">
            <h1>Fill up your details</h1>
            <InputField1/>
            <InputField2/>
            <RegisterButton/>
        </form>
        </div>
    )
}
export default LoginForm;