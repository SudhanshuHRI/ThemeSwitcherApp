import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { useTheme } from "../context/theme.jsx";
const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Multi-Theme App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </li>

       <li className="nav-item">
  <select
    className="form-select theme-select px-5"
    aria-label="Select Theme"
    value={theme}
    onChange={(e) => setTheme(e.target.value)}
  >
    <option value="theme1">Minimal</option>
    <option value="theme2">Dark</option>
    <option value="theme3">Colorful</option>
  </select>
</li>

          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
