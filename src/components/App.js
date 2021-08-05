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
      <div>
        <Pagination
          onPageChange={handlePaginationChange}
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={10}
        />
      </div>
      <IssuesList isLoading={isLoading} issues={issues} />
    </div>
  );
};

export default App;
