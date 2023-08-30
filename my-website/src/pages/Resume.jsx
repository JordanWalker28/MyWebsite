import React, { useState } from 'react';
import Page from '../components/Page';
import TimelineItem from '../components/TimelineItem';
import data from '../json/WorkHistory.json';
import myPdfFile from '../pdfs/jordan_walker_cv.pdf';
import FilterComponent from '../components/FilterComponent'

function Resume({ title }) {
  const [searchValue, setSearchValue] = useState('');

  const filterOptions = [
    { value: 'All', label: 'All' },
    { value: 'Education', label: 'Education' },
    { value: 'Employment', label: 'Employment' },
    // Add more options as needed
  ];

  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    // Implement your filtering logic here using the selected filter value
  };

  const lowercaseSearchValue = searchValue.toLowerCase();

  // Filtered data based on search value and filter type
  const filteredData = data.filter(item => {
    const companyNameMatches = item.companyName.toLowerCase().includes(lowercaseSearchValue);
    const typeMatches = selectedFilter === 'All' || (selectedFilter === 'Education' && item.education) || (selectedFilter === 'Employment' && !item.education);
    return companyNameMatches && typeMatches;
  });

  const isFiltered = lowercaseSearchValue !== '' || selectedFilter !== 'All';

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
        <FilterComponent options={filterOptions} onChange={handleFilterChange} />
      </div>
      <div>
        <button onClick={() => window.open(myPdfFile, '_blank')}>Open PDF</button>
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
