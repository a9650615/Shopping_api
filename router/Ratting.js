import Router from 'koa-router'
import Ratting from '../DB_Class/rattingClass'
const RattingRouter = new Router()

// route path: /Ratting

RattingRouter
  .post('/', async (ctx) => {
    const body = ctx.request.body
    const DATA = {
      product_id: body.product_id,
      rate: body.rate,
      user_id: body.user_id,
    }
    let err = ''

    try {
      DATA = await Ratting.insert(DATA, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err,
      data: DATA
    });
  })
  .get('/:ratting_id', async (ctx) => {
    let DATA = {}
    let err = 'Not Found'

    try {
      DATA = await Ratting.selectAll({ id: ctx.params.ratting_id }, {})

    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })
  .put('/:ratting_id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {
      product_id: body.product_id,
      rate: body.role,
      user_id: body.user_id,
    }
    let err = ''

    try {
      await Ratting.update({ id: ctx.params.ratting_id }, DATA, {})
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

    DATA = await Ratting.delete({ id: ctx.params.ratting_id }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })

export default RattingRouter
