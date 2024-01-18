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
  const turnOffDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div>
      {user?.displayName ? (
        <div className="bg-blue-950 text-gray-300 p-4 flex justify-between">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/dashboard"
                className={`block px-4 py-2 font-bold shadow-lg  bg-blue-950 hover:bg-blue-900 "  ${
                  location.pathname === "/dashboard" && "text-red-900"
                }`}
                onClick={turnOffDropdown}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/athleticbld"
                className={`block px-4 py-2 font-bold shadow-lg  bg-blue-950 hover:bg-blue-900 "  ${
                  location.pathname === "/athleticbld" && "text-red-900"
                }`}
                onClick={turnOffDropdown}
              >
                Athletic Building
              </Link>
            </li>
            <li>
              <Link
                to="/strengthbld"
                className={`block px-4 py-2 font-bold shadow-lg  bg-blue-950 hover:bg-blue-900 "  ${
                  location.pathname === "/strengthbld" && "text-red-900"
                }`}
                onClick={turnOffDropdown}
              >
                Strength Building
              </Link>
            </li>
            <li>
              <Link
                to="/nutrition"
                className={`block px-4 py-2 font-bold shadow-lg  bg-blue-950 hover:bg-blue-900 "  ${
                  location.pathname === "/nutrition" && "text-red-900"
                }`}
                onClick={turnOffDropdown}
              >
                Nutrition
              </Link>
            </li>
            <li>
              <Link
                to="/workoutplan"
                className={`block px-4 py-2 font-bold shadow-lg  bg-blue-950 hover:bg-blue-900 "  ${
                  location.pathname === "/workoutplan" && "text-red-900"
                }`}
                onClick={turnOffDropdown}
              >
                Workout
              </Link>
            </li>

            {/* Dropdown */}
            <li className="relative group" onClick={toggleDropdown}>
              <button
                className={`block px-4 py-2 font-bold shadow-lg  bg-blue-950 hover:bg-blue-900 "  ${
                  location.pathname.includes("/profile") ||
                  location.pathname.includes("/settings")
                    ? "text-red-900"
                    : ""
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
                    className={`block px-4 py-2 font-bold shadow-lg  bg-blue-950 hover:bg-blue-900 "  ${
                      location.pathname === "/profile" && "text-red-900"
                    }`}
                    onClick={toggleDropdown}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className={`block px-4 py-2 font-bold shadow-lg  bg-blue-950 hover:bg-blue-900 "  ${
                      location.pathname === "/settings" && "text-red-900"
                    }`}
                    onClick={toggleDropdown}
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sharedata"
                    className={`block px-4 py-2 font-bold shadow-lg  z-40 bg-blue-950 hover:bg-blue-900 "  ${
                      location.pathname === "/sharedata" && "text-red-900"
                    }`}
                    onClick={toggleDropdown}
                  >
                    Share Data
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
              className={`text-gray-300 block px-4 py-2 font-bold underline hover:text-white ${
                location.pathname === "/" && "text-black"
              }`}
            >
              Sign Out
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
