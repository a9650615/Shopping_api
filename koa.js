import Koa from 'koa'
import koaBody from 'koa-body'
import DB from './model/DB'

const app = new Koa();

app.use(koaBody());
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);