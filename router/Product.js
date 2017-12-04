import Router from 'koa-router'
import Product from '../DB_Class/productClass'
const ProductRouter = new Router()

// route path: /product

ProductRouter
  .post('/', async (ctx) => {
    const body = ctx.request.body
    const DATA = {
      // product_id: ctx.body.product_id,
      price: ctx.body.price,
      amount: ctx.body.amount,
      product_name: ctx.body.product_name,
      content: ctx.body.content,
      // is_empty: ctx.body.is_empty,
      is_discount: ctx.body.is_discount,
    }
    let err = ''

    try {
      await Product.insert(DATA)
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err
    });
  })
  .get('/all', async (ctx) => { // 商品管理
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Product.select()

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })
  .get('/popular', (ctx) => { // 熱門
    ctx.body = [{
      "product_id": 123456,
      "price": 123
    }
    ]
  })


export default ProductRouter
