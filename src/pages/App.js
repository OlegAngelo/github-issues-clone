import React, { useEffect, useState } from "react";
import { Pagination, Dropdown, Grid } from "semantic-ui-react";

import IssuesList from "./Issues/List/IssuesList";

import GithubApi from "../apis/GithubApi";

const App = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const filterOptions = [
    { key: 1, text: "All", value: "all" },
    { key: 2, text: "Open", value: "open" },
    { key: 3, text: "Closed", value: "closed" },
  ];

  useEffect(() => {
    GithubApi.fetchIssues().then((response) => {
      setIssues(response);
      setIsLoading(false);
    });
  }, []);

  const handlePaginationChange = (e, { activePage }) => {
    setIsLoading(true);

    GithubApi.fetchIssues(activePage, filter).then((res) => {
      setIsLoading(false);
      setIssues(res);
      setPage(activePage);
    });
  };

  const handleFilterChange = (e, { value }) => {
    setIsLoading(true);

    GithubApi.fetchIssues(1, value).then((res) => {
      setIsLoading(false);
      setFilter(value);
      setIssues(res);
      setPage(1);
    });
  };

  return (
    <div className='container'>
      <div>
        <Grid columns={2}>
          <Grid.Column>
            <Dropdown
              onChange={handleFilterChange}
              options={filterOptions}
              placeholder='Choose an option'
              selection
              value={filter}
            />
          </Grid.Column>
        </Grid>
      </div>

      <IssuesList isLoading={isLoading} issues={issues} />

      <div className='text-center my-5'>
        <Pagination
          onPageChange={handlePaginationChange}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={100}
          activePage={page}
        />
      </div>
    </div>
  );
};

export default App;
