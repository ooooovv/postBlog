import Router from 'koa-router';
import multer from 'koa-multer';
import path from 'path';

let fileName;
const uploadmulter = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      let mathRan = Math.random();
      cb(null, mathRan + path.extname(file.originalname));
      fileName = mathRan + path.extname(file.originalname);
    },
  }),
});

const upload = new Router();
upload.post('/', uploadmulter.single('file'), (ctx) => {
  ctx.body = fileName;
});

export default upload;
