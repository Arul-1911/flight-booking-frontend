import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backendUrl from "../../Url/backendurl";

const ResetPasswordForm = () => {

const navigate = useNavigate();


  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("*Required"),
    password: Yup.string()
    .min(6, "Password must be at least 6 characters")
      .required("*Required"),
  });

  const onSubmit = async (values, {setSubmitting}) => {
    // Implement reset password logic
   try {
    const response = await axios.post(`${backendUrl}/auth/reset-password`, values);
    console.log('password reset response ', response.data);
    alert('password reset Successfully')
    navigate('/signin')
    
   } catch (error) {
    alert('Error in resetting Password')
    console.error('error reseting password', error)
   }finally{
    setSubmitting(false);
   }
  };

  return (
    <div className="body">
        <div className="auth-form">
      <h2>New Password</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div >
            <Field type="email" id="email" name="email" placeholder="email" />
            <ErrorMessage
              name="email"
              component="span"
              className="error-message"
              
            />
          </div>
          <div className="mb-3"> 
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="New password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className="error-message"
             
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
    </div>
  );
};

export default ResetPasswordForm;
