import React, { useState } from "react";
import "../Style/CheckOut.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import StripeCheckout from "react-stripe-checkout";

import { useNavigate } from "react-router-dom";

function Payment({totalTicketPrice}) {
  const navigate = useNavigate();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const HandleSubmit = (event) => {
    event.preventDefault();
  };

  const onToken = (token) => {
    console.log(token);
    setPaymentSuccess(true);
  };

  const closePaymentSuccessModal = () => {
    setPaymentSuccess(false);
    navigate("/");
  };
  
  return (
    <div className="summary">
      <h2 style={{ alignItems: "center" }}>Payment</h2>
      <form onSubmit={HandleSubmit} className="form-container">
        <div className="input-fields user-name-email">
          <div className="input1">
            <label htmlFor="first-name">First Name</label>
            <input className="inputs" id="first-name" type="text" />
          </div>

          <div className="input1">
            <label htmlFor="last-name">Last Name</label>
            <input className="inputs" id="last-name" type="text" />
          </div>

          <div className="input1">
            <label htmlFor="e-mail">E-mail</label>
            <input className="inputs" id="e-mail" type="text" />
          </div>
        </div>

        <div className="input-fields payment-method">
          <label>Payment Method</label>
          <div className="radio-input">
            <input type="radio" id="Credit-card" />
            <label htmlFor="Credit-card">Credit card</label>
          </div>
          <div className="radio-input">
            <input type="radio" id="Debit-card" />
            <label htmlFor="Debit-card">Debit card</label>
          </div>
          <div className="radio-input">
            <input type="radio" id="UPI" />
            <label htmlFor="UPI">UPI</label>
          </div>
        </div>

        <div className="form-checkout">
          <StripeCheckout
            token={onToken}
            name="Payment Method"
            currency="Inr"
            amount={totalTicketPrice * 100}
            stripeKey="pk_test_51NZVHxSCl6WwwBbXsixTDhJJOzhjUnikFFVBYFp7OrZRIt8O3TKaTn0RXcnZGDdd17JKFKhEdrHjlFevuEcaCXw600lEWtlA08"
          />
        </div>
      </form>

      {paymentSuccess && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closePaymentSuccessModal}>
              &times;
            </span>
            <p>
              {" "}
              Payment Successfull! <br />
              <CheckBoxIcon className="icon" />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
