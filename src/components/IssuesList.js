import React from 'react';
import IssuesListItem from './IssuesListItem';

const IssuesList = ({ issues }) => {
  const renderedList = issues.map((issue) => {
    return <IssuesListItem key={issue.id} issue={issue} />
  });

  return (
    <div className="list-group">
        {renderedList}
    </div>
  );
};

export default IssuesList;
 