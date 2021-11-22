import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const postListShow = keyframes`
    from {
      opacity:0;
    }
    to {
      opacity:1;
    }`;

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
  a {
    text-decoration: none;
  }
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  ${(props) =>
    props.animateShow &&
    css`
      animation: ${postListShow} ${props.animateShow}s;
    `}
  word-break: break-all;
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 2px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
  .contents {
    border-top: 2px solid ${palette.gray[2]};
    margin-top: 1rem;
    padding-top: 3rem;
    img {
      margin-top: 1rem;
      width: 100%;
      height: 100px;
      object-fit: contain;
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 400,
    width: 400,
    overflow: 'hidden',
    padding: 30,
    borderLeft: `3px solid ${palette.cyan[2]}`,
    '&:hover': { transform: 'translateY(-10px)' },
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const PostItem = ({ post, animateShow }) => {
  const { publishedDate, user, tags, title, body } = post;
  return (
    <PostItemBlock animateShow={animateShow}>
      <h2>{title}</h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
        isGrid={true}
      />
      <Tags tags={tags} isGrid={true} />
      <div className="contents" dangerouslySetInnerHTML={{ __html: body }} />
    </PostItemBlock>
  );
};
const PostList = ({ posts, loading, error, showWriteButton }) => {
  const [spacing, setSpacing] = useState(5);
  const classes = useStyles();

  if (error) {
    return <PostListBlock>에러 발생</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            글 작성
          </Button>
        )}
      </WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={spacing}>
                {posts.map((post, index) => (
                  <Grid key={post._id} item>
                    <Link to={`/@${post.user.username}/${post._id}`}>
                      <Paper className={classes.paper}>
                        <PostItem
                          post={post}
                          key={post._id}
                          animateShow={index / 3 + 0.5}
                        />
                      </Paper>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </PostListBlock>
  );
};
export default PostList;
