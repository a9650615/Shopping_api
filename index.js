const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();

app.use(koaBody());
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);