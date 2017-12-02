import Router from 'koa-router'
import Product from '../DB_Class/rattingClass'
const  RattingRouter = new Router()

// route path: /Ratting

RattingRouter
.post('/', async (ctx) => {
  const body = ctx.request.body
  const DATA = {
    product_id: ctx.body.product_id,
    content: ctx.body.content,
    user_id: ctx.body.user_id,
  }
  let err = ''

  try {
    await Ratting.insert(DATA)
  } catch (e) {
    err = e
  }

  ctx.body = JSON.stringify({
    status: !err,
    msg: err
  });
})

RattingRouter
  .get('/all', (ctx) => { // 評語(評分)
    ctx.body = [{
        "content": "賣得好爛",
        "product_id": 123456,
        "from_member_name": "黃浩華"
      }
    ]
  })

export default RattingRouter
