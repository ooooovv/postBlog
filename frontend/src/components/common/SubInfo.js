import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const SubInfoBlock = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color:${palette.gray[6]};
  margin-top: 1rem;
  span + span:before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }

  b {
    font-weight: 800;
  }

  a {
    text-decoration: none;
  }
`;

const SubInfo = ({ username, publishedDate, hasMarginTop, isGrid }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      {isGrid ? (
        <div>
          <span>
            <b>{username}</b>
          </span>
          <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </div>
      ) : (
        <div>
          <span>
            <b style={{ fontSize: '1.5rem' }}>
              <Link to={`/@${username}`}>{username}</Link>
            </b>
          </span>
          <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </div>
      )}
    </SubInfoBlock>
  );
};
export default SubInfo;
