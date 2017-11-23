import Router from 'koa-router'

const OrderRouter = new Router()

// route path: /order

OrderRouter
  .get('/:order_list_id', (ctx) => { // 訂單
    ctx.body = [{
          order:[{
              "product_id": 213456,
              "amount": 4,
              "order_list_id": 234568
          }],
          "member_name": "黃浩華",
          "seller_name": "莊文藝"
      }
    ]     
  })

export default OrderRouter
