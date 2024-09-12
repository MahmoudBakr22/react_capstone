import { useNavigate } from "react-router-dom";
import BookingForm from "./bookingForm/BookingForm";

import classes from "./booking.module.css";

const timesArr = ["17:00", "17:30", "18:00", "19:00", "21:00", "21:30", "23:30"];

const Bookings = () => {
  const navigate = useNavigate();

  const submitData = () => {
    navigate("/confirmed-booking");
  };

  return (
    <div className={classes.container}>
      <h2>Table reservation</h2>
      <BookingForm availableTimes={timesArr} submitData={submitData} />
    </div>
  );
};

export default Bookings;
