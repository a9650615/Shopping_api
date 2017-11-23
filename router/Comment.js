import Router from 'koa-router'

const CommentRouter = new Router()

// route path: /comment

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
