import React, { useState } from 'react';

const FilterSort = ({ stackOverflowResults, redditResults, setStackOverflowResults, setRedditResults }) => {
  const [sortOrder, setSortOrder] = useState('desc');

  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    const sortedSOResults = [...stackOverflowResults].sort((a, b) => order === 'asc' ? a.score - b.score : b.score - a.score);
    setStackOverflowResults(sortedSOResults);

    const sortedRedditResults = [...redditResults].sort((a, b) => order === 'asc' ? a.data.score - b.data.score : b.data.score - a.data.score);
    setRedditResults(sortedRedditResults);
  };

  return (
    <div className="filter-sort">
      <label>
        Sort by score:
        <select value={sortOrder} onChange={handleSort}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </div>
  );
};

export default FilterSort;
