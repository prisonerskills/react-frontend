import React from "react";
import FormikLoginForm from "./Login";

const LoginPage = (props)=> {
    return(  
    <div>
        <h1>Login</h1>
        <FormikLoginForm {...props}/>
    </div>
      
    )};
  export default LoginPage;