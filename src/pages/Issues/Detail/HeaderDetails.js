import React from "react";
import moment from "moment";
import { Divider, Header, Segment } from "semantic-ui-react";

const HeaderDetails = ({ details }) => {
  console.log(details);
  const { title, number, body, state, user, comments } = details;
  const { login } = user;

  const dateInfo = () => {
    const issueCreatedAt = moment(details.created_at);
    const currentMonth = moment().format("M");
    const githubMonth = issueCreatedAt.format("M");

    if (currentMonth === githubMonth) {
      return issueCreatedAt.fromNow();
    }

    return `on ${issueCreatedAt.format("MMM D")}`;
  };

  return (
    <div>
      <h2>
        {title} <span className='text-secondary'> #{number} </span>
      </h2>
      <div>
        <span
          className='rounded-pill mx-3 px-3 py-2 text-capitalize large circle text-white'
          style={{ backgroundColor: state === "open" ? `green` : `red` }}
        >
          {state}
        </span>
        <b>{login}</b> opened this issue {dateInfo()} · {comments} comments
      </div>

      <Divider />
    </div>
  );
};

export default HeaderDetails;
