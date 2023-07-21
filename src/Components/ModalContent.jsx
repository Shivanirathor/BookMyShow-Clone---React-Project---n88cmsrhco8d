import React, { useContext } from "react";
import "../Style/MainContent.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedMovieName } from "../Redux/movieSlice";
import { wishListContext } from "../App";

const ModalContent = ({
  title,
  language,
  rating,
  imgUrl,
  overview,
  releasedate,
  isUserLoggedIn,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wishListContextValue, setWishListContextValue } =
    useContext(wishListContext);

  const onHandleClose = () => {
    location.reload();
  };
  const handleWishlist = ({
    imgUrl,
    title,
    language,
    rating,
    overview,
    releasedate,
  }) => {
    const item = {
      imgUrl,
      title,
      language,
      rating,
      overview,
      releasedate,
    };
    setWishListContextValue([...wishListContextValue, item]);
    navigate("/wishlist");
  };

  const handleTicketBooking = () => {
    if (isUserLoggedIn) {
      dispatch(setSelectedMovieName(title));
      navigate("/ticketbooking");
    } else {
      alert("Please login first to book tickets.");
    }
  };

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

        <div onClick={handleTicketBooking}>
          <button>Book Tickets</button>
        </div>
        <div
          onClick={() => {
            handleWishlist({
              imgUrl,
              title,
              language,
              rating,
              overview,
              releasedate,
            });
          }}
        >
          <button>Wishlist</button>
          <button onClick={onHandleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
