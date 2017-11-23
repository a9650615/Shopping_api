import Router from 'koa-router'

const ShoppingCartRouter = new Router()

// route path: /shopping_cart

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
