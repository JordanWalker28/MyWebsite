import React, { useState } from 'react';
import Page from '../components/Page';
import TimelineItem from '../components/TimelineItem';
import '../styles/timeline.css';
import data from '../json/WorkHistory.json'; // Adjust the path to the JSON file

function Resume({ title }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredData = data.filter(item => {
    const searchMatch = searchValue === '' || (
      item.company && item.company.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.title && item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return searchMatch;
  });

  return (
    <Page title={title}>
      <div id="filters">
        <label htmlFor="search-input">Search:</label>
        <input
          type="text"
          id="search-input"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      <div className="timeline">
        {filteredData.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </Page>
  );
}

export default Resume;
