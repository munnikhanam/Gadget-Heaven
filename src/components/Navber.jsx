import { NavLink } from "react-router-dom";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";

const Navber = () => {
  return (
    <div>
      <div className="navbar text-[#FFFF] ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 mr-5 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/dasboard">Dasboard</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex gap-5">
          <ul className="menu menu-horizontal px-1 mr-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dasboard">Dasboard</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <button className=" mr-5 rounded-full p-3 bg-[#FFFFFF] text-[#000]">
              <HiOutlineShoppingCart />
            </button>
            <button className="rounded-full p-3 bg-[#FFFFFF] text-[#000]">
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
