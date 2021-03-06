import Router from 'koa-router'
import Product from '../DB_Class/commentClass'
const CommentRouter = new Router()

// route path: /comment

CommentRouter
.post('/', async (ctx) => {
  const body = ctx.request.body
  const DATA = {
    product_id: ctx.body.product_id,
    content: ctx.body.content,
    user_id: ctx.body.user_id,
  }
  let err = ''

  try {
    await Comment.insert(DATA)
  } catch (e) {
    err = e
  }

  ctx.body = JSON.stringify({
    status: !err,
    msg: err
  });
})

CommentRouter
  .get('/all', (ctx) => { // 評語(評分)
    ctx.body = [{
        "content": "賣得好爛",
        "product_id": 123456,
        "from_member_name": "黃浩華"
      }
    ]
  })

export default CommentRouter
