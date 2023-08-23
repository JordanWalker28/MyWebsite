import {Outlet } from 'react-router-dom';
import React from 'react';
import Page from '../components/Page';

function Projects({Name}) {
  return (
    <Page title={Name}>
        <Outlet />
    </Page>
  );
  }


  export default Projects;