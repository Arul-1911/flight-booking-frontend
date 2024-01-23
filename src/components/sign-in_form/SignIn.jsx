// SignIn.jsx
import React, { useState } from "react";
import "./style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import backendUrl from "../../Url/backendurl";
import axios from "axios";
import LoaderSpinner from "../../LoaderSpinner"; // Adjust the import path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("*Required"),
    password: Yup.string().required("*Required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
      setSubmitting(true);

      // Simulate a delay before making the API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Make the API call to authenticate user and obtain token
      const response = await axios.post(`${backendUrl}/auth/signin`, values);

      // Update local storage with the new token
      localStorage.setItem("token", response.data.token);

      // Navigate to the home page after successful login
      navigate("/home");
    } catch (error) {
      console.error("Signin error:", error);

      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid username or password. Please try again.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    } finally {
      // Ensure that loading is set to false after the entire process
      setTimeout(() => {
        setLoading(false);
        setSubmitting(false);
      }, 2000); // 2000 milliseconds (2 seconds) delay
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="body">
      {loading ? (
        <LoaderSpinner
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        <div className="body">
          <div className="auth-form">
            <h2>Login</h2>
            {errorMessage && (
              <div className="error-message" role="alert">
                {errorMessage}
              </div>
            )}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div className="mb-2">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="field"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error-message"
                  />
                </div>

                <div className="mb-2 password-container">
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
             

                <button type="submit" className="mt-2 mb-2 submit">
                  Sign In
                </button>
                <div>
                  <p className="mb-3">
                    <Link to="/resetpasswordemail">Forgot Password?</Link>
                  </p>
                  <p>
                    Don't have an account? <Link to="/signup">Register!</Link>
                  </p>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;
