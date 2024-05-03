import React, { useState } from 'react';
import Page from '../components/Page';
import TimelineItem from '../components/TimelineItem';
import data from '../json/WorkHistory.json';
import myPdfFile from '../pdfs/jordan_walker_cv.pdf';
import Dropdown from '../components/Dropdown'
import SearchInput from '../components/SearchInput'
import '../styles/timeline.css'; 

function Resume({ title }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = [
    { value: 'All', label: 'All' },
    { value: 'Education', label: 'Education' },
    { value: 'Employment', label: 'Employment' },
  ];

  const lowercaseSearchValue = searchValue.toLowerCase();

  const filteredData = data.filter(item => {
    const companyNameMatches = item.companyName.toLowerCase().includes(lowercaseSearchValue);
    const typeMatches = selectedFilter === 'All' 
      || (selectedFilter === 'Education' && item.education) 
      || (selectedFilter === 'Employment' && !item.education);
    return companyNameMatches && typeMatches;
  });

  const isFiltered = lowercaseSearchValue !== '' || selectedFilter !== 'All';

  return (
    <Page title={title}>
      <div id="filters">
        <label htmlFor="search-input">Search:</label>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
        <label htmlFor="filter-type">Filter by:</label>
        <Dropdown options={filterOptions} onChange={(value) => setSelectedFilter(value)} value={selectedFilter}/>      
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
              className={`container ${isFiltered ? 'slide-in' : 'slide-out'}`}
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
