import {Outlet } from 'react-router-dom';
import React from 'react';
import Page from '../components/Page';

function Projects({title}) {
  return (
    <Page title={title}>
        <Outlet />
    </Page>
  );
  }


  export default Posts;