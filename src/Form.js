import React from "react";
import InputField2 from "./InputField1";
import InputField3 from "./InputField2";
import RegisterButton from "./RegisterButton";
import "./style2.css";
function InputFields()
{
    return(
        <div>
        <form className="formclass1 form">
            <h1>Fill up your details</h1>
            <InputField2/>
            <InputField3/>
            <RegisterButton/>
        </form>
    </div>
    )
}
export default InputFields;