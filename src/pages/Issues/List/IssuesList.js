import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

import IssuesListItem from "../ListItem/IssuesListItem";

const IssuesList = ({ issues, isLoading }) => {
  const renderedList = issues.map((issue) => {
    return <IssuesListItem key={issue.id} issue={issue} />;
  });

  return (
    <div>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <div className='list-group'>{renderedList}</div>
      )}
    </div>
  );
};

export default IssuesList;
