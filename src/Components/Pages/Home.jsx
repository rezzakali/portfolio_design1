import { Button } from "@mui/material";
import React from "react";
import Typical from "react-typical";
import "../../App.css";
import me1Image from "../Assets/Images/me.svg";

function Home() {
  return (
    <div>
      <div id="home">
        {" "}
        <br />
        <br />
        <div className="row text-center" id="homePageFirstRowId">
          <div className="col-sm-12 col-md-12 col-lg-6 p-3 mt-3">
            <h1>I'm Rezzak Ali </h1>
            <h1>
              a <span style={{ color: "blue" }}>web developer</span>
            </h1>
            <span style={{ color: "white" }}>
              <Typical
                steps={[
                  "Life would be much easier if I had the source code.🤔",
                  3000,
                  "Keep Calm and Show me your Source code.💻 ",
                  3000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </span>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              harum? Quas totam quis exercitationem eius quasi soluta alias unde
              eos.
            </p>
            <Button variant="contained">contact me</Button>
            <Button variant="contained" style={{ marginLeft: "20px" }}>
              browse portfolio
            </Button>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img
              src={me1Image}
              alt="imageMe"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
