require('dotenv').config()
require("babel-core/register")({  
  presets: ['env']
});
require("babel-polyfill");

module.exports = require('./koa.js'); 
