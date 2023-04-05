import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { useState } from "react";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  //keeps track of location
  const location = useLocation();

  //closes the navbar everytime location changes
  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/Michael-2023-Portfolio/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;
