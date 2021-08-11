import React from "react";
import { useParams, Link } from "react-router-dom";

const IssueDetails = () => {
  const { number } = useParams();

  return (
    <div>
      <div>
        <Link to='/'>
          <h5>Github Issues</h5>
        </Link>
      </div>
      <h2>Details Page - {number}</h2>
    </div>
  );
};

export default IssueDetails;
