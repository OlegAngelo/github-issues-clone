import React, { useEffect, useState } from "react";
import IssuesList from "./IssuesList";
import RequestAPI from "./apis/RequestAPI";
import { Pagination } from "semantic-ui-react";

const App = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePaginationChange = (e, { activePage }) => {
    setIsLoading(true);

    RequestAPI.githubAPI(activePage).then((res) => {
      setIsLoading(false);
      setIssues(res);
    });
  };

  useEffect(() => {
    RequestAPI.githubAPI().then((response) => setIssues(response));
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
