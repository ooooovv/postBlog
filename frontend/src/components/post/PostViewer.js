import React from 'react';
import styled from 'styled-components';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
  background: white;
  padding: 3rem;
  border-radius: 2rem;
`;

const PostHead = styled.div`
  border-bottom: 3px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin-bottom: 3rem;
  }
`;

const PostContent = styled.div`
  font-size: 1.3rem;
  color: ${palette.gray[8]};

  img {
    width: 500px;
    height: 350px;
    object-fit: contain;
  }
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생</PostViewerBlock>;
  }

  if (loading || !post) {
    return <PostViewerBlock>loading or no post</PostViewerBlock>;
  }
  const { title, body, user, publishedDate, tags } = post;
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>

        <SubInfo username={user.username} publishedDate={publishedDate} />
        <Tags tags={tags} />
        {actionButtons}
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};
export default PostViewer;
