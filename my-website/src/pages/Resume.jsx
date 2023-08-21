import React from 'react';
import Page from '../components/Page';
import '../styles/timeline.css'; 
import data from '../json/WorkHistory.json'; // Adjust the path to the JSON file


function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <div className="timeline-header">
        <img src={item.companyLogo} alt={item.companyName} />
        <h2>{item.companyName}</h2>
        <p className="timeline-date">{`${item.startDate} - ${item.endDate}`}</p>
      </div>
      <div className="timeline-content">
        <p>{item.description}</p>
        <ul>
          {item.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        <a href={item.websiteUrl}>{item.companyName}</a>
      </div>
    </div>
  );
}

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