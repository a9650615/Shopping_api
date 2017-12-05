import Router from 'koa-router'
import Discount from '../DB_Class/discountClass'
const DiscountRouter = new Router()

// route path: /discount

DiscountRouter
  .post('/', async (ctx) => {
    const body = ctx.request.body
    let DATA = {
      product_id: body.product_id,
      price: body.price,
    }
    let err = ''

    try {
      DATA = await Discount.insert(DATA)
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err,
      data: DATA
    });
  })
  .get('/:discount_id', async (ctx) => {
    let DATA = {}
    let err = 'Not Found'
    try {
      DATA = await Discount.findAll({ id: ctx.params.discount_id }, {})

    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : DATA
    }, {}));
  })
  .put('/:discount_id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {
      product_id: body.product_id,
      price: body.price,
    }
    let err = ''

    try {
      await Discount.update({ id: ctx.params.discount_id }, DATA, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err,
      data: DATA
    });
  })

  .delete('/:discount_id', async (ctx) => {
    let DATA = {}
    let err = 'Not Found'

    DATA = await Discount.delete({ id: ctx.params.discount_id }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })

export default DiscountRouter
