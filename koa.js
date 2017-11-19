import Koa from 'koa'
import koaBody from 'koa-body'
import DB from './model/DB'
import Router from './router'

const app = new Koa();

app.use(koaBody())
  .use(Router.routes())
  .use(Router.allowedMethods());

// response
app.use(ctx => {
  ctx.body = 'No Match Route';
});

app.listen(3000);