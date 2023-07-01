import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Favourite from "./Pages/Favourite";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home";
import SignIn from "./Components/Signup/SignIn";
import Wishlist from "./Components/Wishlist";
import { TicketBooking } from "./Components/Ticket-booking/TicketBooking";

const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "ticketBooking",
    element: <TicketBooking />,
  },
  {
    path: "wishlist",
    element: <Wishlist />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
