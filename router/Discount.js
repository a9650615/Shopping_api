import Router from 'koa-router'
import Discount from '../DB_Class/discountClass'
const DiscountRouter = new Router()

// route path: /discount

DiscountRouter
  .post('/', async (ctx) => {
    const body = ctx.request.body
    const DATA = {
      product_id: ctx.body.product_id,
      price: ctx.body.price,
      product_name: ctx.body.product_name,
    }
    let err = ''

    try {
      await Discount.insert(DATA)
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err
    });
  })
  .get('/:id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Discount.selectAll({ product_id: ctx.params.product_id }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })
  .put('/:id', async (ctx) => {
    const body = ctx.request.body
    const DATA = {
      product_id: ctx.body.product_id,
      price: ctx.body.price,
      product_name: ctx.body.product_name,
    }
    let err = ''

    try {
      await Discount.update({ id: ctx.params.id }, { DATA }, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err
    });
  })

  .delete('/:id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Discount.delete({ id: ctx.params.id }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })

export default DiscountRouter
