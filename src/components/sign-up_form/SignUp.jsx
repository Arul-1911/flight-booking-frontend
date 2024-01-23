import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backendUrl from "../../Url/backendurl";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// ... (previous imports)

function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("*Required"),
    email: Yup.string().email("Invalid Email").required("*Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("*Required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);

      const response = await axios.post(`${backendUrl}/auth/signup`, values);
      console.log("Signup response:", response.data);

      if (response.data.message.includes("email already exists.")) {
        alert("Email already exists. Please use a different email.");
      } else if (response.data.message.includes("username already exists")) {
        alert("Username already exists. Please choose a different username.");
      } else {
        alert('User Registered Successfully');
        navigate("/signin");
      }
    } catch (error) {
      console.error("Signup error:", error);

      // Handle other errors if needed
      alert("Username or Email Already Exists");
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="body">
        <div className="auth-form">
          <h2>Register</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="mb-2">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Username"
                />
                <ErrorMessage
                  component="span"
                  name="name"
                  className="error-message"
                />
              </div>
              <div className="mb-2">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="error-message"
                />
              </div>
              <div className="mb-4 password-container">
                <Field
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className="password-icon"
                  onClick={togglePasswordVisibility}
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error-message"
                />
              </div>
              <button type="submit" disabled={loading} className="mb-1 submit">
                Sign Up
              </button>
              <p>
                Already a member? <Link to="/signin">Login!</Link>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
