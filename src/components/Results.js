function Results({ stackOverflowResults, redditResults }) {
    return (
      <div>
        <h2>Stack Overflow Results</h2>
        {stackOverflowResults.map((item) => (
          <div key={item.question_id}>
            <h3>{item.title}</h3>
            <p>Score: {item.score}</p>
            <a href={item.link}>View on Stack Overflow</a>
          </div>
        ))}
  
        <h2>Reddit Results</h2>
        {redditResults.map((item) => (
          <div key={item.data.id}>
            <h3>{item.data.title}</h3>
            <p>Score: {item.data.score}</p>
            <a href={`https://www.reddit.com${item.data.permalink}`}>View on Reddit</a>
          </div>
        ))}
      </div>
    );
  }
export default Results;  



