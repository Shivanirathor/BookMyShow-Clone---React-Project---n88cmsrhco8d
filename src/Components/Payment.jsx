import React, { useState } from "react";
import "../Style/CheckOut.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const HandleSubmit = (event) => {
    event.preventDefault();
  };

  const onToken = (token) => {
    console.log(token);
    setPaymentSuccess(true);

    // fetch("/save-stripe-token", {
    //   method: "POST",
    //   body: JSON.stringify(token),
    // }).then((response) => {
    //   response.json().then((data) => {
    //     alert(`We are in business, ${data.email}`);
    //   });
    // });
  };

  const closePaymentSuccessModal = () => {
    setPaymentSuccess(false);
    navigate("/home");
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
          {/* <div className="card-name">
            <label htmlFor="cvv">CVV</label>
            <input className="inputs" id="cvv" type="text" />
          </div> */}
        </div>
        <div className="form-checkout">
          {/* <button className="checkout-btn" type="submit">
            Proceed to pay
          </button> */}
          <StripeCheckout
            token={onToken}
            name="Payment Method"
            currency="Inr"
            amount={99999}
            stripeKey="pk_test_51NZVHxSCl6WwwBbXsixTDhJJOzhjUnikFFVBYFp7OrZRIt8O3TKaTn0RXcnZGDdd17JKFKhEdrHjlFevuEcaCXw600lEWtlA08"
          />
        </div>
      </form>
      {/* Conditionally render the alert/modal */}
      {/* {paymentSuccess && showPaymentSuccessAlert()} */}
      {/* Conditionally show the payment success modal */}
      {paymentSuccess && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closePaymentSuccessModal}>
              &times;
            </span>
            <p> Payment Successful! <br/> 
            <CheckBoxIcon className="icon"/>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
