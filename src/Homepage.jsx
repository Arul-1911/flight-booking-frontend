import React from "react";
import Header from "./main_components/Header/Header";
import Home from "./main_components/HomeContent/Home";
import Footer from "./main_components/Footer/Footer";
import Feedback from './main_components/Feedback/Feedback'

function Homepage() {
  return (
    <>
      <Header />
      <Home />
      <Feedback/>
      <Footer />
    </>
  );
}

export default Homepage;
