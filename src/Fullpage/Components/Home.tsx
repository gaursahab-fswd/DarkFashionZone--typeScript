import React from "react";
import "./pages/Component.style.css";
import { NavLink } from "react-router-dom";

const AboutSection = () => {
  const signUp = () => {};

  return (
    <div className="container-fluid">
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container-fluid home-background text-center pt-4">
        <div className="home-content">
          <h1 className="display-2 text-dark">Welcome to Dark Fashion Zone</h1>
          <div className="pt-8">
            <button onClick={() => signUp()} className="btn btn-primary">
              SIGN UP
            </button>
            &nbsp;
            <button className="btn btn-success">LOG IN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
