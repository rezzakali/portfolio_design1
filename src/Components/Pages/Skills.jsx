import React from "react";
import "../../App.css";

function Skills() {
  return (
    <div id="skill">
      <div
        className="m-5"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <box-icon type="logo" name="codepen"></box-icon>
        <h3 className="text-center">Skill & Technology </h3>
      </div>

      <div className="row m-0">
        <div className="col-sm-12 col-md-6 col-lg-6" id="technologyId">
          <h1>
            <span>
              <box-icon
                type="solid"
                name="check-circle"
                style={{
                  backgroundColor: "green",
                  borderRadius: "50px",
                  marginRight: "15px",
                }}
              ></box-icon>
            </span>
            JavaScript
          </h1>
        </div>
        <div className="col-sm" id="technologyId">
          <h1>
            {" "}
            <span>
              <box-icon
                type="solid"
                name="check-circle"
                style={{
                  backgroundColor: "green",
                  borderRadius: "50px",
                  marginRight: "15px",
                }}
              ></box-icon>
            </span>{" "}
            React.js
          </h1>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-sm-12 col-md-6 col-lg-6" id="technologyId">
          <h1>
            {" "}
            <span>
              <box-icon
                type="solid"
                name="check-circle"
                style={{
                  backgroundColor: "green",
                  borderRadius: "50px",
                  marginRight: "15px",
                }}
              ></box-icon>
            </span>{" "}
            Node.js
          </h1>
        </div>
        <div className="col-sm" id="technologyId">
          <h1>
            {" "}
            <span>
              <box-icon
                type="solid"
                name="check-circle"
                style={{
                  backgroundColor: "green",
                  borderRadius: "50px",
                  marginRight: "15px",
                }}
              ></box-icon>
            </span>{" "}
            Php
          </h1>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-sm-12 col-md-6 col-lg-6" id="technologyId">
          <h1>
            {" "}
            <span>
              <box-icon
                type="solid"
                name="check-circle"
                style={{
                  backgroundColor: "green",
                  borderRadius: "50px",
                  marginRight: "15px",
                }}
              ></box-icon>
            </span>{" "}
            MongoDB
          </h1>
        </div>
        <div className="col-sm" id="technologyId">
          <h1>
            {" "}
            <span>
              <box-icon
                type="solid"
                name="check-circle"
                style={{
                  backgroundColor: "green",
                  borderRadius: "50px",
                  marginRight: "15px",
                }}
              ></box-icon>
            </span>{" "}
            MySQL
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Skills;
