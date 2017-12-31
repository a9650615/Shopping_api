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
  .get('/id/:id', async (ctx) => { // 商品管理
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'
    DATA = await Product.findOne({ id: ctx.params.id })

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? { product: DATA } : null));
  })
  .get('/search/:name', async (ctx) => { // 商品搜尋
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'
    DATA = await Product.findAll({name: { $like: `%${ctx.params.name}%` }})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? { product: DATA } : null));
  })
  .get('/user/:user_id', async (ctx) => { // 商品管理
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Product.findAllByUserid({ user_id: ctx.params.user_id })

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? { product: DATA } : null));
  })
  .get('/last', async (ctx) => { // 最新
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Product.findAllWithOption()

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? { product: DATA } : null));
  })

  .put('/:productid', async (ctx) => {
    const body = ctx.request.body
    let DATA = {
      price: body.price,
      amount: body.amount,
      name: body.name,
      content: body.content,
      // is_empty: body.is_empty,
    }
    let err = ''

    try {
      DATA = await Product.update({ id: ctx.params.productid }, DATA, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err
    });
  })

  .delete('/:productid', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Product.delete({ id: ctx.params.productid }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })



export default ProductRouter
