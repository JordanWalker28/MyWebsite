import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import "./Profile.css";
import SocialMediaLinks from './SocialMediaLinks';

export default function Profile() {
  const [text] = useTypewriter({
    words: ["SENIOR DEVELOPER", "C# ENTHIUSIAST", "BACKEND MANAGER"],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 40,
  });

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <SocialMediaLinks />
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
            {" "}
              Hey, I'm <span className="highlighted-text">Jordan</span> a
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <span style={{ display: "inline-block" }}>{text}</span>
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
