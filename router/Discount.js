import Router from 'koa-router'
import Product from '../DB_Class/discountClass'
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
