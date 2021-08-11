import React from "react";
import moment from "moment";
import { Divider, Segment, Image } from "semantic-ui-react";
import parse from "html-react-parser";

const HeaderDetails = ({ details }) => {
  console.log(details);
  const {
    title,
    number,
    body,
    state,
    user: { login, avatar_url },
    comments,
  } = details;

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

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Image alt='avatar' src={`${avatar_url}`} avatar circular />
          </div>

          <div className='col-11'>
            <Segment className='bg-light' attached='top'>
              <b>{login}</b> commented {dateInfo()}
            </Segment>
            <Segment attached>
              <p>{parse(`${body}`)}</p>
            </Segment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetails;
