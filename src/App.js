import React, { useState } from 'react';
import SearchForm from './components/searchForm';
import Results from './components/Results';
import { fetchStackOverflow, fetchReddit, sendEmail } from './api/api';
// import './styles/App.css';

function App() {
  const [stackOverflowResults, setStackOverflowResults] = useState([]);
  const [redditResults, setRedditResults] = useState([]);
  const [email, setEmail] = useState('');

  const handleSearch = async (query) => {
    const soResults = await fetchStackOverflow(query);
    const redditResults = await fetchReddit(query);
    setStackOverflowResults(soResults);
    setRedditResults(redditResults);
  };

  const handleSendEmail = async () => {
    await sendEmail(email, { stackOverflowResults, redditResults });
    alert('Email sent!');
  };

  return (
    <div>
      <h1>Knowledge Base Application</h1>
      <SearchForm onSearch={handleSearch} />
      <Results 
        stackOverflowResults={stackOverflowResults} 
        redditResults={redditResults} 
      />
      <input 
        type="email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button onClick={handleSendEmail}>Send Results to Email</button>
    </div>
  );
}

export default App;  



