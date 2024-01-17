import React,{ useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link} from "react-router-dom";
import axios from "axios";
import backendUrl from "../../Url/backendurl";

function ResetEmail() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("*Required Email"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);

      const response = await axios.post(`${backendUrl}/resetemail/send-reset-link`, values);

      setSuccessMessage(response.data.message);
 
    alert('Reset password link sent to your email')
    } catch (error) {
      console.error("Send reset link error:", error);

      // Handle specific error conditions
      if (error.response && error.response.status === 404) {
        setErrorMessage("Email not found. Please check your email and try again.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="body">
      <div className="auth-form">
        <h2>Reset Password</h2>
        {successMessage && (
          <div className="success-message" role="alert">
            {successMessage}
          </div>
        )}
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
            <div>
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

            <button type="submit">Send Reset Link</button>
            <div>
              <p>
                Remember your password? <Link to="/signin">Login!</Link>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ResetEmail;
