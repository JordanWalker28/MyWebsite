import React, { useState } from 'react';
import Page from '../components/Page';
import TimelineItem from '../components/TimelineItem';
import data from '../json/WorkHistory.json';

function Resume({ title }) {
  const [searchValue, setSearchValue] = useState('');

  // Moved outside the filter function
  const lowercaseSearchValue = searchValue.toLowerCase();

  const items = data;
console.log(items);
  // Filtered data based on search value
  const filteredData = items.filter(item => {
    const companyMatch = item.companyName.toLowerCase().includes(lowercaseSearchValue);
    return companyMatch;
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
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))
        ) : (
          <p>No matching items found.</p>
        )}
      </div>
    </Page>
  );
}

export default Resume;
