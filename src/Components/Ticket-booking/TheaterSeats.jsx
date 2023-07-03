import React, { useContext, useState } from "react";
import "./TicketBooking.css";

import { Link, NavLink, useNavigate } from "react-router-dom";
// import { Overlay } from "../../OverLay/Overlay";

export function TheaterSeats(props) {
  const navigate = useNavigate();
  const price = 250;
  const [flag, setFlag] = useState(false);
  const [seatState, setSeatState] = useState([]);

  let styleSeat = props.Seats.map((item, index, arr) => {
    return arr.map((c, i) => {
      return {
        seatNo: `${item}-${i}`,
        flag: false,
      };
    });
  });
  const [seatSelect, setSeatSelect] = useState(styleSeat);

  const seatsSection = (arr, row) => {
    return arr.map((item, index) => {
      return (
        <div
          id={`${row}-${index}`}
          className={`seat ${
            seatSelect[row][index].flag ? "seatSelect-on" : ""
          }`}
          key={"seat" + row + "" + index}
          onClick={(e) => {
            SeatNumber(`${row}-${index}`, e.target);
          }}
        >{`${row}-${index}`}</div>
      );
    });
  };

  const SeatNumber = (num, arg2) => {
    let seatSelect1 = seatSelect.map((i, j, arr) => {
      return i.map((l, m) => {
        return l.seatNo === num ? { ...l, flag: !l.flag } : l;
      });
    });
    setSeatSelect(seatSelect1);
    setSeatState([...seatState, num]);
  };

  const submitSeatSelected = () => {
    // if (props.BookingDate === null || seatState.length <= 0) {
    //   setFlag(true);
    //   return;
    // }

    const ticketDetails = {
      seats: seatState,
      noSeats: seatState.length,
      price,
      name: props.movieName,
      BookingDate: props.BookingDate,
    };
    localStorage.setItem("BookingDetails", JSON.stringify(ticketDetails));
    navigate("/checkout");
  };

  const overlayFlagCheck = () => {
    setFlag(false);
  };

  return (
    <>
      <div className="seats-grid">
        <div className="seat-row">{seatsSection(props.Seats, 0)}</div>
        <div className="seat-row">{seatsSection(props.Seats, 1)}</div>
        <div className="seat-row">{seatsSection(props.Seats, 2)}</div>
        <div className="seat-row">{seatsSection(props.Seats, 3)}</div>
        <div className="seat-row">{seatsSection(props.Seats, 4)}</div>
        <div className="seat-row">{seatsSection(props.Seats, 5)}</div>
        <div className="seat-row">{seatsSection(props.Seats, 6)}</div>
        <div className="seat-row">{seatsSection(props.Seats, 7)}</div>
        <div className="seat-row">{seatsSection(props.Seats, 8)}</div>
        <div className="seat-row">{seatsSection(props.Seats, 9)}</div>

        <button className="btn-seat" onClick={submitSeatSelected}>
          Submit
        </button>
      </div>
      {/* {flag && (
        <Overlay functionCall={overlayFlagCheck}>
          <h4 className="over-ticket">Please Fill in all details to Book</h4>
        </Overlay>
      )} */}
    </>
  );
}
