// NavBar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Nav = () => {
  const { user } = UserAuth();
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };


  return (
  <div>
    {user?.displayName?(<div className="bg-blue-950 text-gray-300 p-4 flex justify-between">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/dashboard"
            className={`text-gray-300 hover:text-white ${
              location.pathname === "/dashboard" && "text-black"
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/athleticbld"
            className={`text-gray-300 hover:text-white ${
              location.pathname === "/athleticbld" && "text-black"
            }`}
          >
            Athletic Building
          </Link>
        </li>
        <li>
          <Link
            to="/strengthbld"
            className={`text-gray-300 hover:text-white ${
              location.pathname === "/strengthbld" && "text-black"
            }`}
          >
            Strength Building
          </Link>
        </li>
        <li>
          <Link
            to="/nutrition"
            className={`text-gray-300 hover:text-white ${
              location.pathname === "/nutrition" && "text-black"
            }`}
          >
            Nutrition
          </Link>
        </li>
        <li>
          <Link
            to="/calendar"
            className={`text-gray-300 hover:text-white ${
              location.pathname === "/calendar" && "text-black"
            }`}
          >
            Calendar
          </Link>
        </li>

        {/* Dropdown */}
        <li className="relative group" onClick={toggleDropdown}>
          <button
            className={`text-gray-300 hover:text-white ${
              location.pathname.includes("/profile") && "text-black"
            }`}
          >
            More
          </button>
          <ul
            className={`absolute ${
              isDropdownOpen ? "block" : "hidden"
            } bg-blue-950 text-gray-300 mt-2`}
          >
            <li>
              <Link
                to="/profile"
                className={`block px-4 py-2 ${
                  location.pathname === "/profile" && "text-black"
                }`}
                onClick={toggleDropdown}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={`block px-4 py-2 ${
                  location.pathname === "/settings" && "text-black"
                }`}
                onClick={toggleDropdown}
              >
                Settings
              </Link>
            </li>
          </ul>
        </li>
        {/* End Dropdown */}
      </ul>

      {/* Sign Out (Top Right) */}
      <div>
        <Link
          to="/"
          className={`text-gray-300 hover:text-white ${
            location.pathname === "/" && "text-black"
          }`}
        >
          Sign Out
        </Link>
      </div>
    </div>):(null)}
  </div>
    
    
  );
};

export default Nav;
