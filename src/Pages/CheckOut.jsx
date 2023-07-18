import React from "react";
import Summary from "../Components/Summary";
import { useNavigate } from "react-router-dom";
import Payment from "../Components/Payment";
import Header from "../Components/Header";

function CheckOut() {
  const ticketDetails = JSON.parse(localStorage.getItem("BookingDetails"));
  const navigate = useNavigate();
  // console.log("ticketsdetails", ticketDetails);
  return (
    <div className="check-out">
      <Header hideSearch/>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <h1 className="checkout-heading">Checkout</h1>
      <div className="wraper-checkout">
        <Summary BookingDetails={ticketDetails} />
        <Payment />
      </div>
    </div>
  );
}
export default CheckOut;
