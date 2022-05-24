import React from "react";
import "../../App.css";
import ls from "../Assets/Images/ls.jpg";
import pg from "../Assets/Images/pg.png";
import qa from "../Assets/Images/qa.png";
import rps from "../Assets/Images/rps.png";

function Projects() {
  return (
    <div>
      <div id="project">
        <br />
        <br />
        <br />
        <div
          className="mt-4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <box-icon name="code-alt"></box-icon>
          <h3 className="m-2">Apps I'v Built</h3>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
            <div className="card" style={{ height: "420px" }}>
              <img src={ls} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Link Shortener</h5>
                <p className="card-text">
                  This project is fully created using React.js which I deploy it
                  on Netlify.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card" style={{ height: "420px" }}>
              <img src={pg} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Password Generator</h5>
                <p className="card-text">
                  This project is fully created using React.js which I deploy it
                  on Netlify.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
            <div className="card" style={{ height: "420px" }}>
              <img src={qa} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Quiz App</h5>
                <p className="card-text">
                  This project is fully created using React.js which I deploy it
                  on Netlify.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card" style={{ height: "420px" }}>
              <img src={rps} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Rock Paper Scissors</h5>
                <p className="card-text">
                  This project is fully created using React.js which I deploy it
                  on Netlify.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
