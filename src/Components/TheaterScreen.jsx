import React from "react";
import "../Style/TicketBooking.css";
import screen from "../assets/Screen.jpeg";

export function TheaterScreen() {
  return (
    <div className="theater-screen">
      <img src={screen} alt="theater screen" />
    </div>
  );
}
