import React from 'react';
import '../styles/timeline.css'; 

function TimelineItem({ item }) {
    return (
      <div class="business-card">
				<div class="profile">
					<div class="profile-image">
          <img src={process.env.PUBLIC_URL + '/' + item.companyLogo} alt={item.companyName} />
          </div>
					<div class="profile-title">
          <h3>{item.education ? 'education' : 'professional'} - {item.companyName}</h3>						
          <h4>{`${item.startDate} - ${item.endDate}`}</h4>
					<span><a href={item.websiteUrl}>{item.companyName}</a></span>
					</div>
				</div>		
			</div>
    );
  }

  export default TimelineItem;