import React, { useContext } from "react";
import "../Style/MainContent.css";
import { wishListContext } from "../App";
import Carousel from "react-material-ui-carousel";

const Wishlist = () => {
  const { wishListContextValue, setWishListContextValue } =
    useContext(wishListContext);

  const deleteWishlist = () => {
    setWishListContextValue([]) 
    if(wishListContext == []){

      console.log("now wishlist is empty!! ");
    }
    
  };

  return (
    <>
    
      <div className="wishlistCss">
        {wishListContextValue.map((item) => {
          return (
            <div className="modalCards">
              <div>
                {" "}
                <img src={item.imgUrl} alt="img" width={150} height={250} />
              </div>
              <div className="modalText">
                <div className="tags1">Title:- {item.title}</div>
                <div>Language:- {item.language}</div>
                <div>Rating:- ⭐{item.rating} / 10</div>
                <div>Overview:- {item.overview}</div>
                <div>Release date:-{item.releasedate}</div>
              </div>
            </div>
          );
        })}
        <div>
          <button onClick={deleteWishlist}>Delete</button>
        </div>
      </div>
     
    </>
  );
};

export default Wishlist;
