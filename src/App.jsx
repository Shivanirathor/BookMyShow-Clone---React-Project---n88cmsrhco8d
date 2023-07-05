import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./Pages/Home/Home";

import Favourite from "./Pages/Favourite";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home";
import SignIn from "./Components/Signup/SignIn";
import Wishlist from "./Components/Wishlist";
import { TicketBooking } from "./Components/Ticket-booking/TicketBooking";
// import CheckOut from "./Components/Checkout/Checkout";
import { createContext, useContext, useState } from "react";
import CheckOut from "./Components/Checkout/Checkout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "home",
    element: <Home />,
  },
  // {
  //   path: "login",
  //   element: <Login />,
  // },
  {
    path: "favourite",
    element: <Favourite />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <SignIn />,
  },
  {
    path: "ticketbooking",
    element: <TicketBooking />,
  },
  {
    path: "wishlist",
    element: <Wishlist />,
  },
  {
    path: "checkout",
    element: <CheckOut/>
  },
]);
 export const wishListContext = createContext();
function App() {
 
  const [wishListContextValue, setWishListContextValue] = useState([]);
  return (
    <>
      <wishListContext.Provider value={{wishListContextValue, setWishListContextValue}}>
        <RouterProvider router={router} />
      </wishListContext.Provider>
    </>
  );
}

export default App;
