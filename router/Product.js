import Router from 'koa-router'
import Product from '../DB_Class/productClass'
const ProductRouter = new Router()

// route path: /product

ProductRouter
  .post('/', async (ctx) => {
    const body = ctx.request.body
    let DATA = {
      // product_id: ctx.body.product_id,
      price: body.price,
      amount: body.amount,
      name: body.name,
      content: body.content,
      // is_empty: ctx.body.is_empty,
      user_id: body.user_id
    }
    let err = ''

    try {
      DATA = await Product.insert(DATA)
    } catch (e) {
      err = e
    }
    ctx.body = JSON.stringify({
      status: !err,
      msg: err,
      data: DATA
    });
  })
  .get('/all', async (ctx) => { // 商品管理
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Product.findAll()

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? { product: DATA } : null));
  })
  .get('/:id', async (ctx) => { // 商品管理
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'
    DATA = await Product.findOne({ id: ctx.params.id })

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? { product: DATA } : null));
  })
  .get('/user/:userid', async (ctx) => { // 商品管理
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Product.findAll({ user_ID: ctx.params.userid })

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? { product: DATA } : null));
  })
  .get('/last', async (ctx) => { // 最新
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Product.findAll({}, { limit: 10, order: ["create_Time", DESC] })

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })

  .put('/:product_id', async (ctx) => {
    const body = ctx.request.body
    const DATA = {
      // product_id: ctx.body.product_id,
      price: body.price,
      amount: body.amount,
      product_name: body.product_name,
      content: body.content,
      // is_empty: body.is_empty,
      is_discount: body.is_discount,
    }
    let err = ''

    try {
      await Product.update({ id: ctx.params.product_id }, { DATA }, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err
    });
  })

  .delete('/:product_id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Product.delete({ id: ctx.params.product_id }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })



export default ProductRouter
