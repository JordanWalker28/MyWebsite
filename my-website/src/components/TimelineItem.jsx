import React, { useState } from 'react';
import '../styles/timeline.css';

function TimelineItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`business-card ${isOpen ? 'open' : ''}`}>
      <div className="profile">
        <div className="profile-image">
          <img src={process.env.PUBLIC_URL + '/' + item.companyLogo} alt={item.companyName} />
        </div>
        <div className="profile-title">
          <h3>{item.education ? 'education' : 'professional'} - {item.companyName}</h3>
          <h4>{`${item.startDate} - ${item.endDate}`}</h4>
          <span><a href={item.websiteUrl}>{item.companyName}</a></span>
        </div>
        <details open={isOpen}>
          <summary onClick={toggleAccordion}>Show More</summary>
          <div className="accordion-content">
            <p>{item.description}</p>
          </div>
        </details>
      </div>
    </div>
  );
}

export default TimelineItem;
