import Router from 'koa-router'
import Ratting from '../DB_Class/rattingClass'
const RattingRouter = new Router()

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
      await Ratting.insert({ DATA }, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err
    });
  })
  .get('/:ratting_id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Ratting.selectAll({ product_id: ctx.params.product_id }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })
  .put('/:ratting_id', async (ctx) => {
    const body = ctx.request.body
    const DATA = {
      product_id: ctx.body.product_id,
      content: ctx.body.content,
      user_id: ctx.body.user_id,
    }
    let err = ''

    try {
      await Ratting.update({ product_id: ctx.params.product_id }, { DATA }, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err
    });
  })

  .delete('/:ratting_id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Ratting.delete({ product_id: ctx.params.product_id }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })

export default RattingRouter
