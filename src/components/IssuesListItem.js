import React from 'react';
import moment from 'moment';

import './css/IssuesListItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const IssuesListItem = ({ issue }) => {

  const date_info = () => {
    const issue_created_at = moment(issue.created_at);
    const current_month = moment().format("M");
    const github_month = issue_created_at.format("M");

    if (current_month === github_month) {
      return issue_created_at.fromNow();
    };
        
    return `on ${issue_created_at.format("MMM D")}`;
  };

  const issue_labels = issue.labels.map((label) => {
      return (
        <span 
          className="mx-2 px-2 rounded-pill" 
          key="label.id" 
          style={{ backgroundColor: `#${label.color}` }}
        >
          {label.name}
        </span>
      );
  });

  return (
    <div className="issue-item list-group-item media parent"> 
      <i 
        className="large circle middle aligned icon"
        style={{color: issue.state === 'open' ? `green` : `red`}}
      >
      </i>
      <div className="content">
        <div className="header">
          <b>{issue.title}</b>
          {issue_labels}
        </div> 
        <div className="description">
          #{issue.number} opened {date_info()} by {issue.user.login}
        </div>
      </div>
    </div>
  );
};

export default IssuesListItem;
 
