import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from '../services/api';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ timeGrouping: '5min', search: {} });

  useEffect(() => {
    fetchData(filters).then((fetchedData) => setData(fetchedData));    
  }, [filters]);

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <DataContext.Provider value={{ data, filters, updateFilters }}>
      {children}
    </DataContext.Provider>
  );
};
