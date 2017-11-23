import Router from 'koa-router'

const DiscountRouter = new Router()

// route path: /discount

DiscountRouter
  .get('/:product_id', (ctx) => { // 折扣
    ctx.body = [{
        product:[{
          "product_id" : 213456,
            "product_name": "火球",
            "price" : 1234
        }]
        }
    ]
  })

export default DiscountRouter
