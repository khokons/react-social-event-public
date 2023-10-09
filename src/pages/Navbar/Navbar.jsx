import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li className="uppercase">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="reviews">Reviews</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/event">Event Planing</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar lg:bg-[#3F1D38] lg:text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl uppercase">Social Events</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

    
        
          <div className="w-10 h-10 rounded-full mr-3">
            {
              user && <img src={user.photoURL} alt="" />
            }
          </div>
        </label>

        {user ? (
          <button onClick={handleLogOut} className="btn">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;


