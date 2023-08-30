import React, { useState } from 'react';

function FilterComponent({ options, onChange }) {
  const [filterType, setFilterType] = useState('All');

  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    setFilterType(selectedValue);
    onChange(selectedValue);
  };

  return (
    <select id="filter-type" value={filterType} onChange={handleFilterChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default FilterComponent;