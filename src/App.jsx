import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./Pages/Home/Home";

import Favourite from "./Pages/Favourite";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home";
import SignIn from "./Components/Signup/SignIn";
import Wishlist from "./Components/Wishlist";
import { TicketBooking } from "./Components/Ticket-booking/TicketBooking";
import CheckOut from "./Components/Checkout/Checkout";

// import { CheckOut } from "./Components/Checkout/Checkout";

// import Summary from "./Components/Checkout/Summary";

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
  {
    path: "checkout",
    element: <CheckOut />,
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
