import React from "react";
import socialLinks from "../Json/socialLinks.json"; // Import the JSON file

const SocialMediaLinks = () => {
  return (
    <div className="colz-icon">
      {socialLinks.links.map((link, index) => (
        <a key={index} target="_blank" rel="noreferrer" href={link.url} aria-label={link.label}>
          <i className={`${link.icon} fa-2x share`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
