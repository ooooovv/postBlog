import Router from 'koa-router';
import auth from './auth';
import posts from './posts';
import upload from './upload';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());
api.use('/upload', upload.routes());

export default api;
