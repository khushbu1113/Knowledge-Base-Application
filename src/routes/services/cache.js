// Example cache logic using an in-memory cache like Map
const cache = new Map();

const getCachedResults = (query) => {
  return cache.has(query) ? cache.get(query) : null;
};

const setCachedResults = (query, results) => {
  cache.set(query, results);
};

module.exports = { getCachedResults, setCachedResults };
