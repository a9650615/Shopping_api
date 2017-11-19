import Router from 'koa-router'

const router = new Router();

router.post('/ww', (ctx) => {
  ctx.body = 'post'
});

export default router;
