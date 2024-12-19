import React, { useContext } from 'react';
import { DataContext } from '@context/DataContext';

const SearchableList = ({ title, dataKey }) => {
  const { data, updateFilters } = useContext(DataContext);
  console.log("Data in serachable list", data, dataKey)

  const handleSearch = (event) => {
    updateFilters({ search: { [dataKey]: event.target.value } });
  };

const filteredData = data.map(item => item[dataKey])

  return (
    <div className="searchableList">
      <h3>{title}</h3>
      <input
        type="text"
        placeholder={`Search ${title}`}
        onChange={handleSearch}
      />
      <ul>
        {filteredData?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
