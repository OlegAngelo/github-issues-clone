import React from "react";
import IssuesListItem from "./IssuesListItem";

const IssuesList = ({ issues, isLoading }) => {
  const renderedList = issues.map((issue) => {
    return <IssuesListItem key={issue.id} issue={issue} />;
  });

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='list-group'>{renderedList}</div>
      )}
    </div>
  );
};

export default IssuesList;
