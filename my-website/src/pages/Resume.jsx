import React, { useState } from 'react';
import Page from '../components/Page';
import TimelineItem from '../components/TimelineItem';
import data from '../json/WorkHistory.json';

function Resume({ title }) {
  const [searchValue, setSearchValue] = useState('');

  const lowercaseSearchValue = searchValue.toLowerCase();

  // Filtered data based on search value
  const filteredData = data.filter(item => 
    item.companyName.toLowerCase().includes(lowercaseSearchValue)
  );

  const isFiltered = lowercaseSearchValue !== '';

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
      <div className={`timeline ${isFiltered ? 'filtered' : ''}`}>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              className={`timeline-item ${isFiltered ? 'slide-in' : 'slide-out'}`}
            />          ))
        ) : (
          <p>No matching items found.</p>
        )}
      </div>
    </Page>
  );
}

export default Resume;
