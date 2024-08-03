import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState, useEffect } from "react";

export default function Profile() {
  const [text] = useTypewriter({
    words: ["better.", "together.", "differently."],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
      setShowCursor(false);
  }, [text]);

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'm <span className="highlighted-text">Jordan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <span style={{ fontweigh: "bold", color: "green" }}>
                  {text}
                  {showCursor && <Cursor style={{ width: "1px" }} />}
                </span>
              </h1>
              <span className="profile-role-tagline">
                Building backend applications with Front End in mind
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me! </button>
            <a href="jordan_walker_cv.pdf" download="jordan_walker_cv.pdf">
              <button className="btn primary-btn"> Resume! </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
