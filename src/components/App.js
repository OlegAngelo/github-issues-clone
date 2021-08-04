import React, { useEffect, useState } from 'react';
import IssuesList from './IssuesList';
import RequestAPI from './apis/RequestAPI';

const App = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    RequestAPI.githubAPI()
      .then((response) => setIssues(response));
  }, []);

  return (
    <div className="container">
      <IssuesList issues={issues}/>
    </div>
  );
};

export default App;
 
