import Router from 'koa-router'
import Comment from '../DB_Class/commentClass'
const CommentRouter = new Router()

// route path: /comment/product

CommentRouter
  .post('/:id', async (ctx) => {
    const body = ctx.request.body
    const DATA = {
      product_id: ctx.body.product_id,
      content: ctx.body.content,
      user_id: ctx.body.user_id,
    }
    let err = ''

    try {
      await Comment.insert({ DATA }, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err
    })
  })
  .get('/:comment_id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Comment.selectAll({ product_id: ctx.params.product_id }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })
  .put('/:comment_id', async (ctx) => {
    const body = ctx.request.body
    const DATA = {
      product_id: ctx.body.product_id,
      content: ctx.body.content,
      user_id: ctx.body.user_id,
    }
    let err = ''

    try {
      await Comment.update({ id: ctx.params.userId }, { DATA }, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err
    });
  })

  .delete('/:comment_id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Comment.delete({ product_id: ctx.params.product_id }, {})

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
