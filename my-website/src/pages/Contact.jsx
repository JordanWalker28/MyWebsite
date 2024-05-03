import React from 'react';
import Page from '../components/Page';
import '../styles/contact.css';
import socialLinksData from '../json/Social.json';
import { SocialIcon } from 'react-social-icons'


function Contact({ title }) {
  const socialLinks = socialLinksData;

  return (
    <Page title={title}>
      <div className="center-container">
        <div className="grid-container">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.URL}>
              <SocialIcon url={link.Social} href={link.URL}/>
            </a>
          ))}
        </div>
      </div>
    </Page>
  );
}

export default Contact;
