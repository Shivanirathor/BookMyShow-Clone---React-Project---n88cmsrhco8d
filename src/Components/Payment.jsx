import React from "react";
import "../Style/CheckOut.css";

function Payment() {
  const HandleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="summary">
      <h2>Payment</h2>
      <form onSubmit={HandleSubmit}>
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
        <div className="input-fields">
          <input type="radio" id="Credit-card" />
          <label htmlFor="Credit-card">Credit card</label>
          <input type="radio" id="Debit-card" />
          <label htmlFor="Debit-card">Debit card</label>
          <input type="radio" id="UPI" />
          <label htmlFor="UPI">UPI</label>
        </div>
        <div className="card-details">
          <div className="card-name">
            <label htmlFor="card-holder">Card holder Name</label>
            <input className="inputs" id="card-holder" type="text" />
          </div>
          <div className="card-name">
            <label htmlFor="exp-date">Expiration</label>
            <input className="inputs" id="exp-date" type="text" />
          </div>
          <div className="card-name">
            <label htmlFor="cvv">CVV</label>
            <input className="inputs" id="cvv" type="text" />
          </div>
        </div>
        <div className="form-checkout">
          <button className="checkout-btn" type="submit">
            Proceed to pay
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
