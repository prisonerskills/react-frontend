import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function RegisterForm({ values, errors, touched, isSubmitting }) {
  return (
      
    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="text" name="username" placeholder="Username" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <div>
        {touched.prisonName && errors.prisonName && <p>{errors.prisonName}</p>}
        <Field type="text" name="prisonName" placeholder="Prison name" />
      </div>
      <div>
        {touched.zipCode && errors.zipCode && <p>{errors.zipCode}</p>}
        <Field type="text" name="zipCode" placeholder="zipCode" />
      </div>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="email" />
      </div>
      
      <button disabled={isSubmitting}>Register &rarr;</button>
    </Form>
    
  );
}

const FormikRegisterForm = withFormik({
  mapPropsToValues({ username, password, prisonName, zipCode, email }) {
    return {
      username: username || "",
      password: password || "",
      prisonName: prisonName || "",
      zipCode: zipCode || "",
      email: email || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("username is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required"),
    prisonName: Yup.string()
      .required('prison name is required'),
    zipCode: Yup.string()
      .required('Zipcode is required'),
    email: Yup.string()
    .email("Email not valid")
    .required('Email is required'),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post(" https://sheltered-ravine-78333.herokuapp.com/api/users/register", values)
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
})(RegisterForm);
 //export default RegisterForm;
export default FormikRegisterForm;