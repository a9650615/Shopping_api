import Koa from 'koa'
import koaBody from 'koa-body'
import { sequelize } from './library/DB'
import DB_INIT from './model/index.js'
import Router from './router'

sequelize.sync();

const app = new Koa();

app.use(koaBody())
  .use(Router.routes())
  .use(Router.allowedMethods());

// response
app.use(ctx => {
  ctx.body = 'No Match Route';
});

app.listen(3000);