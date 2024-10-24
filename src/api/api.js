import axios from 'axios';

// Fetch from StackOverflow
export const fetchStackOverflow = async (query) => {
  const url = `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`;
  const response = await axios.get(url);
  return response.data.items;
};

// Fetch from Reddit
export const fetchReddit = async (query) => {
  const url = `https://www.reddit.com/search.json?q=${query}`;
  const response = await axios.get(url);
  return response.data.data.children;
};

// Send email with results
export const sendEmail = async (email, results) => {
  const url = `http://localhost:5000/api/email`;  // Backend email route
  const response = await axios.post(url, { email, results });
  return response.data;
};




