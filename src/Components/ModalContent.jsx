import React, { useContext } from "react";
import "../Style/MainContent.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedMovieName } from "../Redux/movieSlice";
import { wishListContext } from "../App";

const ModalContent = ({
  setOpenModal,
  title,
  language,
  rating,
  imgUrl,
  overview,
  releasedate,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onHandleClose = () => {
    // setOpenModal(false);
    // navigate("/home");
    location.reload();
  };
  const { wishListContextValue, setWishListContextValue } =
    useContext(wishListContext);

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
    // console.log(wishListContextValue);
  };

  const handleTicketBooking = () => {
    dispatch(setSelectedMovieName(title));
    navigate("/ticketbooking");
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

        <button onClick={onHandleClose}>Close</button>
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
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
