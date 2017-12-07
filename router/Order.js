import Router from 'koa-router'
import Order from '../DB_Class/orderClass'
const OrderRouter = new Router()

// route path: /order/order_list

OrderRouter
  .post('/', async (ctx) => {
    const body = ctx.request.body
    let DATA = {
      price: body.price,
      state: body.state,
      user_id: body.user_id,
      content: body.content,
      user_id: body.user_id
    }
    let err = ''
    // {
    //   price: 1111,
    //   state: 1,
    //   user_id: 1,
    //   product: [{ amount: 1, product_id: 2 }, { amount: 1, product_id: 2 }, { amount: 1, product_id: 2}]
    // }
    try {
      //DATA = await Product.insert(DATA)
      //body.product.forEach(async (element) => {
      //  await Product.insert(Object.assign(element, { order_list_id: DATA.id }))
      //})
    } catch (e) {
      err = e
    }
    ctx.body = JSON.stringify({
      status: !err,
      msg: err,
      data: DATA
    });
  })
  .get('/:order_list_id', async (ctx) => { // 訂單
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Order.Select(ctx.params.order_list_id)
    console.log(DATA)
    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })

export default OrderRouter
