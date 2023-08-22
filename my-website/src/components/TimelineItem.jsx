import React from 'react';
import '../styles/timeline.css'; 

function TimelineItem({ item }) {
    return (
      <div className="timeline-item">
        <div className="timeline-header">
          <img src={process.env.PUBLIC_URL + '/' + item.companyLogo} alt={item.companyName} />
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

  export default TimelineItem;