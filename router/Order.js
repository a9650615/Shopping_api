import Router from 'koa-router'
import Order from '../DB_Class/orderClass'
import OrderDetail from '../DB_Class/orderDetailClass'
const OrderRouter = new Router()

// route path: /order/order_list

OrderRouter
  .post('/', async (ctx) => {
    const body = ctx.request.body
    let DATA = {
      price: body.price,
      state: body.state,
      user_id: body.user_id
    }
    let info = {
      order_list_id: null,
      price: body.price,
      state: body.state,
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
      let request = await Order.insert(DATA);
      info.order_list_id = request.id;
      body.product.forEach(async (element) => {
        console.log(element)
        element = JSON.parse(element)
        let product_data = {
          order_List_id: info.order_list_id,
          product_id: element.product_id,
          amount: element.amount
        }
        let tmp = await OrderDetail.insert(product_data)
      });
      console.log(request);
      DATA = request;
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
      msg: DATA == null ? err : '',
      data: DATA ? DATA : null
    }));
  })

export default OrderRouter
