import React from "react";
import { useNavigate } from "react-router-dom";
import Summary, { calculateTotalTicketPrice } from "../Components/Summary";
import Payment from "../Components/Payment";

function CheckOut() {
  const ticketDetails = JSON.parse(localStorage.getItem("BookingDetails"));
  const navigate = useNavigate();
  const totalTicketPrice = calculateTotalTicketPrice(ticketDetails);
  return (
    <div className="check-out">
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

        <Payment totalTicketPrice={totalTicketPrice} />
      </div>
    </div>
  );
}
export default CheckOut;
