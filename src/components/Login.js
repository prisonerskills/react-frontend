import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ values, errors, touched, isSubmitting }) {
  return (
      
    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="text" name="username" placeholder="username" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      
      <button disabled={isSubmitting}>Login</button>
    </Form>
    
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password, tos, meal }) {
    return {
      username: username || "",
      password: password || "",
      
    };
  },
//   validationSchema: Yup.object().shape({
//      username: Yup.string()
//       .username("username not valid")
//       .required("username is required"),
//     password: Yup.string()
//       .min(16, "Password must be 16 characters or longer")
//       .required("Password is required")
//   }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.username === "alreadytaken@atb.dev") {
      setErrors({ username: "That username is already taken" });
    } else {
      axios
        .post(" https://sheltered-ravine-78333.herokuapp.com/api/users/login", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(LoginForm);
 //export default LoginForm;
export default FormikLoginForm;