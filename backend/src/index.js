/*eslint-disable no-global-assign */
// module.exports 형태를 리액트 export default , import 형태로 바꿔주는 esm 설정하는곳

require = require('esm')(module /*,options*/);
module.exports = require('./main.js');
