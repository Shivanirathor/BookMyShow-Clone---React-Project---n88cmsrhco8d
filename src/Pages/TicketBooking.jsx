import React, { useState } from "react";
import { TheaterScreen } from "../Components/TheaterScreen";
import { TheaterSeats } from "../Components/TheaterSeats";
import "../Style/TicketBooking.css";
import { useSelector } from "react-redux";
import Header from "../Components/Header";

const theaterName = ["PVR Cinema", "Metro INOX Cinema", "Cinepolis"];
const showTime = ["10:15", "12:45", "3:15", "5:45"];
const theaterSeats = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function TicketBooking() {
  const [date, setDate] = useState(null);
  const { selectedMovieName } = useSelector((state) => state.movie);

  const options = (arr, name) => {
    return arr.map((item, index) => {
      return (
        <option value={index} key={name + index}>
          {item}
        </option>
      );
    });
  };

  const dateOfBooking = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="book">
      <Header hideSearch />
      <h3>Book Ticket</h3>
      <p>
        <span className="heading">Movie: </span>

        <p> {selectedMovieName}</p>
      </p>

      <div className="Booking-nav">
        <div className="border-class">
          <select className="select-theater">
            {options(theaterName, "theater")}
          </select>
        </div>
        <div className="border-class">
          <input type="date" onChange={dateOfBooking} />
        </div>
        <div className="border-class">
          <select className="select-theater">
            {options(showTime, "time")}
          </select>
        </div>
      </div>
      <div className="ticket">
        <TheaterScreen />
        <div className="seats-section">
          <TheaterSeats BookingDate={date} Seats={theaterSeats} />
        </div>
      </div>
    </div>
  );
}
