import React, { useState } from 'react';
import Page from '../components/Page';
import TimelineItem from '../components/TimelineItem';
import data from '../json/WorkHistory.json';

function Resume({ title }) {
  const [searchValue, setSearchValue] = useState('');
  const [filterType, setFilterType] = useState('All'); // Added state for filter type

  const lowercaseSearchValue = searchValue.toLowerCase();

  // Filtered data based on search value and filter type
  const filteredData = data.filter(item => {
    const companyNameMatches = item.companyName.toLowerCase().includes(lowercaseSearchValue);
    const typeMatches = filterType === 'All' || (filterType === 'Education' && item.education) || (filterType === 'Employment' && !item.education);
    return companyNameMatches && typeMatches;
  });

  const isFiltered = lowercaseSearchValue !== '' || filterType !== 'All';

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
        <label htmlFor="filter-type">Filter by:</label>
        <select
          id="filter-type"
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Education">Education</option>
          <option value="Employment">Employment</option>
        </select>
      </div>
      <div className={`timeline ${isFiltered ? 'filtered' : ''}`}>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              className={`timeline-item ${isFiltered ? 'slide-in' : 'slide-out'}`}
            />
          ))
        ) : (
          <p>No matching items found.</p>
        )}
      </div>
    </Page>
  );
}

export default Resume;
