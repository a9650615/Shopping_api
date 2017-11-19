require('dotenv').config()
const Koa = require('koa');
const koaBody = require('koa-body');
const sequelize = require('sequelize');
const ENV = process.env;
const Sequelize = new sequelize(ENV.MYSQL_DB, ENV.MYSQL_USER, ENV.MYSQL_PASS, {
  host: ENV.MYSQL_HOST,
  dialect: 'mysql'
});

const app = new Koa();

Sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.use(koaBody());
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);