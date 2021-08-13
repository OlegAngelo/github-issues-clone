import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import GithubApi from "../../../apis/GithubApi";
import { Dimmer, Loader } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";
import HeaderDetails from "./components/HeaderDetails";
import BodyDetails from "./components/BodyDetails";
import moment from "moment";

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
          <div>
            <HeaderDetails dateInfo={dateInfo} details={details} />

            <Divider />

            <BodyDetails dateInfo={dateInfo} details={details} />
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueDetails;
