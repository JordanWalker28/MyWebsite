import React from 'react';
import Page from '../components/Page';
import TimelineItem from '../components/TimelineItem'
import '../styles/timeline.css'; 
import data from '../json/WorkHistory.json'; // Adjust the path to the JSON file


function Resume({title}) {
  return (
    <Page title={title}>
    <div className="timeline">
      {data.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </div>

    </Page>
  );
  }

export default Resume;