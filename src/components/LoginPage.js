import React from "react";
import FormikLoginForm from "./Login";
import RegisterationPage from "./RegisterationPage";
const LoginPage = (props)=> {
    return(  
    <div>
        <h1>Login</h1>
        <FormikLoginForm {...props}/>
        <RegisterationPage/>
    </div>
      
    )};
  export default LoginPage;