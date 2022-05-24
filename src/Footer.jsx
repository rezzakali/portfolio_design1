import React from "react";
import "./App.css";

function Footer() {
  return (
    <div className="row">
      <footer>
        <h3>Connect me</h3>
        <div className="icons">
          <a
            href="https://www.instagram.com/rezzak134"
            target="_blank"
            rel="noreferrer"
          >
            <box-icon type="logo" name="instagram"></box-icon>
          </a>
          <a
            href="https://www.facebook.com/rezzakali22"
            target="_blank"
            rel="noreferrer"
          >
            <box-icon name="facebook-circle" type="logo"></box-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/rezzak-ali-18149a1ab/"
            target="_blank"
            rel="noreferrer"
          >
            <box-icon name="linkedin-square" type="logo"></box-icon>
          </a>
          <a
            href="https://www.reddit.com/user/rezzak_ali"
            target="_blank"
            rel="noreferrer"
          >
            <box-icon name="reddit" type="logo"></box-icon>
          </a>
          <a
            href="https://therezzak.blogspot.com"
            target="_blank"
            rel="noreferrer"
          >
            <box-icon type="logo" name="blogger"></box-icon>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
