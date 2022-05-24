import emailjs from "@emailjs/browser";
import { Button } from "@mui/material";
import React, { useRef } from "react";
import "../../App.css";
import me from "../Assets/Images/me1.png";

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs
      .sendForm(
        "service_eeot699",
        "template_prazzki",
        form.current,
        "Nu9H_UO1WtZ6RD51-"
      )
      .then(
        (result) => {
          alert("Message send successfully");
        },
        (error) => {
          alert(error.message);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <br />
        <br />
        <div className="m-5">
          <h3 className="text-center">
            {" "}
            <span>
              <box-icon type="solid" name="envelope"></box-icon>
            </span>{" "}
            Get in touch
          </h3>
        </div>
        <div className="contactForm rounded">
          <div className="row ">
            <div className="col-sm-12 col-md-6 col-lg-6 p-4 text-center">
              <h2>Let's talk about everything</h2>
              <img
                src={me}
                alt=""
                style={{
                  width: "190px",
                  height: "190px",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <h2>Feel free to ask us anything!</h2>
              <p style={{ color: "white" }}>
                Have doubt or suggestion to make? Feel free to ask anything. If
                you have any suggestions, please let me know. Your suggestions
                are highly appreciated. I appreciate your time and try hard to
                reply to every single message posted here! Keep dropping your
                priceless opinions.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 p-4">
              <h3>Hire me</h3>
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat animi non velit.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    name="user_name"
                    id="name"
                    aria-describedby="helpId"
                    required="required"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="user_email"
                    id="email"
                    aria-describedby="helpId"
                    required="required"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="3"
                    required="required"
                  ></textarea>
                </div>
                <Button
                  variant="contained"
                  type="submit"
                  value="Send"
                  style={{ width: "100%" }}
                  required="required"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
