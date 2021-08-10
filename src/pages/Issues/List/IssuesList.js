import React from "react";
import { Link } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";

import IssuesListItem from "../ListItem/IssuesListItem";

import "./css/IssuesList.css";

const IssuesList = ({ issues, isLoading }) => {
  const renderedList = issues.map((issue) => {
    return (
      <Link to={`/issues/${issue.number}`} key={issue.id} className='list-group'>
        <IssuesListItem issue={issue} />
      </Link>
    );
  });

  return (
    <div>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <div>{renderedList}</div>
      )}
    </div>
  );
};

export default IssuesList;
