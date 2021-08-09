import React, { useEffect, useState } from "react";
import { Pagination, Dropdown, Grid } from "semantic-ui-react";

import IssuesList from "./Issues/List/IssuesList";

import GithubApi from "../apis/GithubApi";

const App = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState([]);

  useEffect(() => {
    GithubApi.fetchIssues().then((response) => setIssues(response));
  }, []);

  const handlePaginationChange = (e, { activePage }) => {
    setIsLoading(true);

    GithubApi.fetchIssues(activePage).then((res) => {
      setIsLoading(false);
      setIssues(res);
    });
  };

  const options = [
    { key: 1, text: "All", value: "all" },
    { key: 2, text: "Open", value: "open" },
    { key: 3, text: "Closed", value: "closed" },
  ];

  const handleChange = (e, { activeState }) => {
    GithubApi.fetchIssues(activeState).then((res) => {
      setValue(res);
    }); 
  };

  return (
    <div className='container'>
      <div>
        <Grid columns={2}>
          <Grid.Column>
            <Dropdown
              onChange={handleChange}
              options={options}
              placeholder='Choose an option'
              selection
              value={value}
              multiple={true}
            />
          </Grid.Column>
        </Grid>
      </div>

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
