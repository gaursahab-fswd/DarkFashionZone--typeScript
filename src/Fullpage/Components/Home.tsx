import React from "react";
import "./pages/Component.style.css";

const AboutSection = () => {
  const signUp = () => {};

  return (
    <div className="container-fluid">
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
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
