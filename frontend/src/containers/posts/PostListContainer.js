import React, { useEffect } from 'react';
import PostList from '../../components/posts/PostList';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import qs from 'qs';
import { listPosts } from '../../modules/posts';

const PostListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { posts, loading, error, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      loading: loading['posts/LIST_POSTS'],
      error: posts.error,
      user: user.user,
    }),
  );

  useEffect(() => {
    const { username } = match.params;
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ username, tag, page }));
  }, [dispatch, location.search, match.params]);
  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};
export default withRouter(PostListContainer);
