// eslint-disable-next-line no-unused-vars
import React from "react";
import "../App.css";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="nav">
      <h1>
        <Link className="navLink" to="/">Kalvium❤️</Link></h1>
      <div className="nav2">
        <p>
          <Link className="navLink" to={"/contact"}>Contact</Link>
          </p>
        <p>
        <Link className="navLink" to={"/about"}>About</Link>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
