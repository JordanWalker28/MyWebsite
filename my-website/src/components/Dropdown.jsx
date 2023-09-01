import React from 'react';

function Dropdown({ options, onChange, value }) {
  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <select id="filter-type" value={value} onChange={handleFilterChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
