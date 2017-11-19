require('dotenv').config()

require("babel-core/register")({
  presets: ['env', 'stage-0']
});
// require("babel-core").transform("code", {
//   presets: ['es2015', "stage-0"]
// });
require("babel-polyfill");

module.exports = require('./koa.js'); 
