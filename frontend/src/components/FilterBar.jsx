import React, { useContext } from 'react';
import { DataContext } from '@context/DataContext';

const TIME_FILTERS = ['5min', 'Hour', 'Day', 'Week', 'Month']

const FilterBar = () => {
  const { filters, updateFilters } = useContext(DataContext);

  const handleTimeGroupingChange = (grouping) => {
    updateFilters({ timeGrouping: grouping });
  };

  return (
    <div className="filter-bar">
      <div>
        <span>Time Grouping: </span>
        {TIME_FILTERS.map((group) => (
          <button
            key={group}
            className={filters.timeGrouping === group ? 'active' : ''}
            onClick={() => handleTimeGroupingChange(group)}
          >
            {group}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar
