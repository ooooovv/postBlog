import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagsBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;

const Tags = ({ tags, isGrid }) => {
  return (
    <TagsBlock>
      {isGrid ? (
        <div>
          {tags.map((tag) => (
            <div className="tag" key={tag}>
              #{tag}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {tags.map((tag) => (
            <Link className="tag" to={`/?tag=${tag}`} key={tag}>
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </TagsBlock>
  );
};
export default Tags;
