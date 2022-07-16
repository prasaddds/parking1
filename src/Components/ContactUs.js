import React from "react";
import InputField1 from "../InputField1";
import InputField2 from "../InputField2";
import RegisterButton from "../RegisterButton";
import Header from "../Header";
import Navbar from "./Navbar";
function SignUpForm()
{
    return (
        <div>
        <Header/>
        <Navbar/>
        <form className="formclass1 form">
            <h1>Fill up your details</h1>
            <InputField1/>
            <InputField2/> <br/>
            <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Enter your query."/>
            <RegisterButton/>
        </form>
        </div>
    )
}
export default SignUpForm;