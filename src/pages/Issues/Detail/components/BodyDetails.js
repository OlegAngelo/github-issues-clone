import React from "react";
import { Segment, Image } from "semantic-ui-react";
import ReactMarkdown from "react-markdown";
import { gfm } from "micromark-extension-gfm";

const BodyDetails = ({ details, dateInfo }) => {
  const {
    body,
    user: { login, avatar_url },
  } = details;

  return (
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
            <ReactMarkdown remarkPlugins={[gfm]} children={body} />
          </Segment>
        </div>
      </div>
    </div>
  );
};

export default BodyDetails;
