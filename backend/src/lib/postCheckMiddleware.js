import mongoose from 'mongoose';
import Post from '../models/post';

const { ObjectId } = mongoose.Types;

// 포스트 아이디로 불러오기
export const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  try {
    const post = await Post.findById(id);
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
  return next();
};

// 로그인 상태인지 확인
export const checkLoggedIn = (ctx, next) => {
  if (!ctx.state.user) {
    ctx.status = 401;
    return;
  }
  return next();
};

// 자신의 포스터인지 확인
export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;
  if (post.user._id.toString() !== user._id) {
    console.log('잘못된 포스트');
    ctx.status = 403;
    return;
  }
  return next();
};
