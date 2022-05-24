import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

function Navbar() {
  return (
    <React.Fragment>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light"
        id="navBarId"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" id="bland">
            <h5>
              {" "}
              <span>
                {" "}
                <box-icon
                  name="code-alt"
                  style={{
                    backgroundColor: "green",
                    borderRadius: "50px",
                    marginRight: "15px",
                  }}
                ></box-icon>{" "}
              </span>{" "}
              CodingAddicted
            </h5>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  smooth
                  to="#home"
                  style={{ color: "white" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth
                  to="#project"
                  style={{ color: "white" }}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  smooth
                  to="#testimonial"
                  style={{ color: "white" }}
                >
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth
                  to="#contact"
                  tabIndex="-1"
                  style={{ color: "white" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
