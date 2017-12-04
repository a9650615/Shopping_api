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
      name: body.product_name,
      content: body.content,
      // is_empty: ctx.body.is_empty,
      is_discount: body.is_discount,
      user_ID: body.member_id
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
    }, DATA ? {product: DATA} : null));
  })
  .get('/popular', (ctx) => { // 熱門
    ctx.body = [{
      "product_id": 123456,
      "price": 123
    }
    ]
  })


export default ProductRouter
