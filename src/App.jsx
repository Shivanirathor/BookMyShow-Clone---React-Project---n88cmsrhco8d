import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favourite from "./Pages/Favourite";
import SignIn from "./Pages/SignIn";
import Wishlist from "./Pages/Wishlist";
import { TicketBooking } from "./Pages/TicketBooking";
import { createContext, useState } from "react";
import CheckOut from "./Pages/CheckOut";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "home",
    element: <Home />,
  },
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
    element: <CheckOut />,
  },
]);
export const wishListContext = createContext();

function App() {
  const [wishListContextValue, setWishListContextValue] = useState([]);
  return (
    <>
      <wishListContext.Provider
        value={{ wishListContextValue, setWishListContextValue }}
      >
        <RouterProvider router={router} />
      </wishListContext.Provider>
    </>
  );
}

export default App;
