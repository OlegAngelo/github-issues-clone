import React from "react";
import { useParams } from "react-router-dom";

const IssueDetails = () => {
  const { number } = useParams();

  return (
    <div>
      <h2>Details Page - {number}</h2>
    </div>
  );
};

export default IssueDetails;
