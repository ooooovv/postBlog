import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import * as postCheckMiddleware from '../../lib/postCheckMiddleware';

const posts = new Router();
const postCheck = postCheckMiddleware;

posts.get('/', postsCtrl.list);
posts.post('/', postCheck.checkLoggedIn, postsCtrl.write);
posts.get('/:id', postCheck.getPostById, postsCtrl.read);
posts.delete(
  '/:id',
  postCheck.checkLoggedIn,
  postCheck.getPostById,
  postCheck.checkOwnPost,
  postsCtrl.remove,
);
posts.patch(
  '/:id',
  postCheck.checkLoggedIn,
  postCheck.getPostById,
  postCheck.checkOwnPost,
  postsCtrl.update,
);

export default posts;
