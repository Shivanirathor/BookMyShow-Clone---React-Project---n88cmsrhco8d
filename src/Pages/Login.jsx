import React, { useState } from "react";
import { Link } from "react-router-dom";
import userImg from "../assets/user.png";
import "../Style/Home.css";

// const Login = () => {
//   const usename = localStorage.getItem("name") || " ";
//   return (
//     <div className="login">
//       <Link to="Signup">
//         <img src={userImg} alt="img" width={"30px"} height={"20px"} />
//         {localStorage.getItem("loggedIn") ? (
//           <div>Welcome {usename}</div>
//         ) : (
//           <h3>Login</h3>
//         )}
//       </Link>
//     </div>
//   );
// };
const Login = () => {
  const username = localStorage.getItem("name") || " ";
  const isLoggedIn = localStorage.getItem("loggedIn");

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("loggedIn");
      window.location.reload();
    }
  };

  return (
//     <div className="login">
//       <div className="user-dropdown">
//         <img
//           src={userImg}
//           alt="img"
//           width={"30px"}
//           height={"20px"}
//           onClick={() => {
//             const dropdown = document.querySelector(".user-dropdown-menu");
//             dropdown.classList.toggle("show");
//           }}
//         />
//         <div className="user-dropdown-menu">
//           {localStorage.getItem("loggedIn") ? (
//             <div style={{ color: "blue" }}>
//               Welcome {usename}
//               <div></div>
//               <button onClick={handleLogout}>Logout</button>
//             </div>
//           ) : (
//             <Link to="Signup">Login</Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

<div className="login">
<div className="user-dropdown">
  <img
    src={userImg}
    alt="img"
    width={"30px"}
    height={"20px"}
    onClick={() => {
      const dropdown = document.querySelector(".user-dropdown-menu");
      dropdown.classList.toggle("show");
    }}
  />
  <div className="user-dropdown-menu">
    {isLoggedIn ? (
      <div>
        {/* <div style={{ color: "blue" }}>
          Welcome {username}
        </div> */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <Link to="Signup">Login</Link>
    )}
  </div>
</div>
{isLoggedIn && (
  <div style={{ color: "blue" }}>
    Welcome {username}
  </div>
)}
</div>
);
};
export default Login;
