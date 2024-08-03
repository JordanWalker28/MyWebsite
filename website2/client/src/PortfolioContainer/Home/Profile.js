import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import './Profile.css'

export default function Profile() {
  const [text] = useTypewriter({
    words: ["Senior Developer", "C# Enthusiast", "Backend Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                  
                <i className="fab fa-facebook-square share"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-square share"></i>
              </a>
              <a href="#">
                <i className="fab fa-github-square share"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram-square share"></i>
              </a>
              <a href="#">
                <i className="fab fa-google-square share"></i>
              </a>
            </div>
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
                <span style={{display: 'inline-block'}}>
                  {text}
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
              <button className="btn highlighted-btn"> Resume! </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
