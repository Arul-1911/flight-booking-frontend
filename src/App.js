import { Routes, Route } from "react-router-dom";
import SignIn from "./components/sign-in_form/SignIn";
import SignUp from "./components/sign-up_form/SignUp";
import Reset from "./components/reset-password/Reset";
import GetStarted from "./components/getstartedpage/GetStarted";
import ResetEmail from "./components/reset-email/ResetEmail";
import Homepage from "./Homepage";
import BookTicketPage from './BookTicketPage';
import SeatBooking from "./main_components/BookTicket/SeatBooking";
import About from "./main_components/Header/About";
import Contact from "./main_components/Header/Contact";
import ErrorPage from "./components/error404page/ErrorPage";
import MyTickets from "./main_components/BookTicket/MyTickets";



function App() {
  return (
    <>
      <Routes>
        {/*routes using the Route component */}
        <Route path="/"  element={<GetStarted />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetPassword/:token" element={<Reset />} />
        <Route path="/resetPasswordemail" element={<ResetEmail />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/bookticket/:departure/:arrival/:flightClass/:date" element={<BookTicketPage />} />
        <Route path="/seatBooking" element={<SeatBooking />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/errorpage" element={<ErrorPage/>} />
        <Route path="/myticket" element={<MyTickets/>}/>

      </Routes>
      
    </>
  );
}

export default App;
