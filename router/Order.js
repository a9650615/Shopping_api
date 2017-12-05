import Router from 'koa-router'
import order_list from '../DB_Class/orderClass'
const OrderRouter = new Router()

// route path: /order/order_list

OrderRouter
  .get('/:order_list_id', (ctx) => { // 訂單
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await order_list.selectOne({ id: ctx.params.id }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })

export default OrderRouter
