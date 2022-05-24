import React from "react";
import "../../App.css";

function Testimonial() {
  return (
    <div>
      <div id="testimonial">
        <br />
        <br />
        <br />
        <div
          className="m-5"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <box-icon type="solid" name="offer"></box-icon>
          <h3>Client's Testimonial</h3>
        </div>

        <div className="row m-0">
          <div className="col-sm-12 col-md-6 col-lg-6" id="testimonialId">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate dolor placeat sint, debitis unde eum, accusamus dolorem
              voluptas voluptatum blanditiis, ratione officia obcaecati
              perspiciatis minus cumque error cupiditate commodi odio possimus?
              Consequuntur unde eum explicabo repellendus, officia est provident
              quae.
            </p>
            <h2>--XYZ</h2>
            <span style={{ fontWeight: "bold", color: "black" }}>
              Web Developer
            </span>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6" id="testimonialId">
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium facilis ipsam doloribus? Illum suscipit molestiae
              impedit magni nam? Aliquid nesciunt delectus nulla animi
              consectetur. Blanditiis neque molestiae eligendi iusto veniam,
              ipsam laudantium fugiat vel voluptatum nulla enim quos sint
              mollitia.
            </p>
            <h2>--XYZ</h2>
            <span style={{ fontWeight: "bold", color: "black" }}>
              Web Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
