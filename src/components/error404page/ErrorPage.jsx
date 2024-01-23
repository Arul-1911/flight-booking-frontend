import React from "react";
import Header from "../../main_components/Header/Header";
import "./errorpage.css";

import errorImage from "../../assets/error404page.jpg";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/home");
  };
  return (
    <>
      <Header />
      <div>
        <div className="err-img-container">
          <div className="error-img-container">
            <img src={errorImage} alt="error-page-img" />
          </div>
          <button className="bth-err-btn" onClick={handleBackToHome}>
            Back To Home
          </button>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
