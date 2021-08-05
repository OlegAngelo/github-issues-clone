import React from "react";
import moment from "moment";

import "./css/IssuesListItem.css";

const IssuesListItem = ({ issue }) => {
  const dateInfo = () => {
    const issueCreatedAt = moment(issue.created_at);
    const currentMonth = moment().format("M");
    const githubMonth = issueCreatedAt.format("M");

    if (currentMonth === githubMonth) {
      return issueCreatedAt.fromNow();
    }

    return `on ${issueCreatedAt.format("MMM D")}`;
  };

  const issueLabels = issue.labels.map((label) => {
    return (
      <span
        className='mx-2 px-2 rounded-pill'
        key={label.id}
        style={{ backgroundColor: `#${label.color}` }}
      >
        {label.name}
      </span>
    );
  });

  return (
    <div className='issue-item list-group-item media parent'>
      <i
        className='large circle middle aligned icon'
        style={{ color: issue.state === "open" ? `green` : `red` }}
      ></i>
      <div className='content'>
        <div className='header'>
          <b>{issue.title}</b>
          {issueLabels}
        </div>
        <div className='description'>
          #{issue.number} opened {dateInfo()} by {issue.user.login}
        </div>
      </div>
    </div>
  );
};

export default IssuesListItem;
