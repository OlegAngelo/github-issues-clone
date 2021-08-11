import React, { useState, useEffect } from "react";
import HeaderDetails from "./HeaderDetails";
import { useParams, Link } from "react-router-dom";
import GithubApi from "../../../apis/GithubApi";
import { Dimmer, Loader } from "semantic-ui-react";

const IssueDetails = () => {
  const { number } = useParams();
  const [details, setDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    GithubApi.fetchIssueDetails(number).then((response) => {
      setDetails(response);
      setIsFetching(false);
    });
  }, []);

  return (
    <div>
      <div>
        <Link to='/'>
          <h5>Github Issues</h5>
        </Link>
      </div>

      <div>
        {isFetching ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
          <HeaderDetails details={details} />
        )}
      </div>
    </div>
  );
};

export default IssueDetails;
