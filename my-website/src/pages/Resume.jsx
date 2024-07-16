import React, { useState } from 'react';
import Page from '../components/Page';
import TimelineItem from '../components/TimelineItem';
import data from '../json/WorkHistory.json';
import Dropdown from '../components/Dropdown'
import SearchInput from '../components/SearchInput'
import '../styles/timeline.css'; 
import Button from '@mui/material/Button';

function Resume({ title }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = [
    { value: 'All', label: 'All' },
    { value: 'Education', label: 'Education' },
    { value: 'Employment', label: 'Employment' },
  ];

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `jordan_walker_cv.pdf`;
    link.href = 'pdfs/jordan_walker_cv.pdf';
    link.click();
  };

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
        <Button variant="contained" onClick={() => window.open('/pdfs/jordan_walker_cv.pdf', '_blank')}>Open PDF</Button>
        <Button onClick={onDownload} variant="contained" color="primary">Download</Button>
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
