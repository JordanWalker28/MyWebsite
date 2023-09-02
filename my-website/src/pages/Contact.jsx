import React from 'react';
import Page from '../components/Page';
import '../styles/contact.css';
import socialLinksData from '../json/Social.json';

function Contact({ title }) {
  const socialLinks = socialLinksData;

  return (
    <Page title={title}>
      <div className="center-container">
        <div className="grid-container">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.URL}>
              <img src={link.Image} alt={link.Name}></img>
            </a>
          ))}
        </div>
      </div>
    </Page>
  );
}

export default Contact;
