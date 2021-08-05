import React, { useEffect, useState } from "react";
import { Pagination } from "semantic-ui-react";

import IssuesList from "./Issues/List/IssuesList";

import GithubApi from "../apis/GithubApi";

const App = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePaginationChange = (e, { activePage }) => {
    setIsLoading(true);

    GithubApi.fetchIssues(activePage).then((res) => {
      setIsLoading(false);
      setIssues(res);
    });
  };

  useEffect(() => {
    GithubApi.fetchIssues().then((response) => setIssues(response));
  }, []);

  return (
    <div className='container'>
      <IssuesList isLoading={isLoading} issues={issues} />
      <div className='text-center my-5'>
        <Pagination
          onPageChange={handlePaginationChange}
          defaultActivePage={1}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={100}
        />
      </div>
    </div>
  );
};

export default App;
