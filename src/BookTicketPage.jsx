import React from "react";
import Header from "./main_components/Header/Header";
import Footer from "./main_components/Footer/Footer";
import BookTicket from "./main_components/BookTicket/BookTicket";

function Homepage() {
  return (
    <>
      <Header />
      <BookTicket />
      <Footer />
    </>
  );
}

export default Homepage;
