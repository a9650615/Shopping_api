import Router from 'koa-router'
import Comment from '../DB_Class/commentClass'
const CommentRouter = new Router()

// route path: /comment/product

CommentRouter
  .post('/', async (ctx) => {
    const body = ctx.request.body
    let DATA = {
      product_id: body.product_id,
      content: body.content,
      user_id: body.user_id,
    }
    let err = ''

    try {
      DATA = await Comment.insert(DATA, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err,
      data: DATA
    });
  })
  .get('/:comment_id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'
    try {
      DATA = await Comment.findAll({ id: ctx.params.comment_id }, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : DATA
    }, {}));
  })
  .get('/product/:product_id', async (ctx) => {
    let DATA = {}
    let err = 'Not Found'
    try {
      DATA = await Comment.findAllByProductid({ product_id: ctx.params.product_id }, {})

    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : DATA
    }, {}));
  })

  .put('/:comment_id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {
      product_id: body.product_id,
      content: body.content,
      user_id: body.user_id,
    }
    let err = ''

    try {
      await Comment.update({ id: ctx.params.comment_id }, DATA, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err,
      data: DATA
    });
  })

  .delete('/:comment_id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'
    try {
      DATA = await Comment.delete({ id: ctx.params.comment_id }, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })

// CommentRouter
//   .get('/all', (ctx) => { // 評語(評分)
//     ctx.body = [{
//         "content": "賣得好爛",
//         "product_id": 123456,
//         "from_member_name": "黃浩華"
//       }
//     ]
//   })

export default CommentRouter
