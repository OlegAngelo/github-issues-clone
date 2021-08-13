import React from "react";
import moment from "moment";

const HeaderDetails = ({ details, dateInfo }) => {
  const {
    title,
    number,
    state,
    user: { login },
    comments,
  } = details;

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
    </div>
  );
};

export default HeaderDetails;
