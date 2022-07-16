import React from "react";
import InputField1 from "../InputField1";
import InputField2 from "../InputField2";
import RegisterButton from "../RegisterButton";
import Header from "../Header";
import Navbar from "./Navbar";
function LoginForm2()
{
    return (
        <div>
        <Header/>
        <Navbar/>
        <form className="formclass1 form">
            <h1>Fill up your details</h1>
            <InputField1/>
            <InputField2/>
            <RegisterButton/>
        </form>
        </div>
    )
}
export default LoginForm2;