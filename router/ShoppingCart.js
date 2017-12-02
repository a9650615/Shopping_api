import Router from 'koa-router'
import Product from '../DB_Class/shoppingcartClass'
const ShoppingCartRouter = new Router()

// route path: /shopping_cart

ShoppingcartRouter
.post('/', async (ctx) => {
  const body = ctx.request.body
  const DATA = {
    product_id: ctx.body.product_id,
    price: ctx.body.price,
    amount: ctx.body.amount,
    user_id: ctx.body.user_id,
  }
  let err = ''

  try {
    await Shoppingcart.insert(DATA)
  } catch (e) {
    err = e
  }

  ctx.body = JSON.stringify({
    status: !err,
    msg: err
  });
})

ShoppingCartRouter
  .get('/all', (ctx) => { // 購物車商品
    ctx.body = [{
            "user_id": 1234,
            product:[{
                "product_id": 123456,
                "amount": 4,
                "price": 123
            }]
        }
    ] 
  })

export default ShoppingCartRouter
