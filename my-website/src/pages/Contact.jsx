import React from 'react';
import Page from '../components/Page';
import '../styles/contact.css';

function Contact({title}) {
  return (
    <Page title={title}>
      <div class="center-container">

  <div class="grid-container">
    <a href="https://github.com">
      <img src="github-icon.png" alt="GitHub"></img>
    </a>
    <a href="https://twitter.com">
      <img src="twitter-icon.png" alt="Twitter"></img>
    </a>
    <a href="mailto:your.email@gmail.com">
      <img src="gmail-icon.png" alt="Gmail"></img>
    </a>
    <a href="https://linkedin.com">
      <img src="linkedin-icon.png" alt="LinkedIn"></img>
    </a>
  </div>
  </div>
    </Page>
  );
  }

export default Contact;