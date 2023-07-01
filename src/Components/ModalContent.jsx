import React from "react";
import "./MainContent.css";
import { Link } from "react-router-dom";

const ModalContent = ({
  handleClose,
  title,
  language,
  rating,
  imgUrl,
  overview,
  releasedate,
}) => {
  return (
    <div className="modalCards">
      <div>
        {" "}
        <img src={imgUrl} alt="img" width={150} height={250} />
      </div>
      <div className="modalText">
        <div className="tags1">Title:- {title}</div>
        <div>Language:- {language}</div>
        <div>Rating:- ⭐{rating} / 10</div>
        <div>Overview:- {overview}</div>
        <div>Release date:-{releasedate}</div>
        {/* <button onClick={handleClose}>Close Modal</button> */}
        <Link to="ticketBooking">
          <button>Book Tickets</button>
        </Link>
        <Link to="wishlist">
          <button>Wishlist</button>
        </Link>
      </div>
    </div>
  );
};

export default ModalContent;
