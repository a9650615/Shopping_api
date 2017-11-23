import Router from 'koa-router'

const ProductRouter = new Router()

// route path: /product

ProductRouter
  .get('/all', (ctx) => { // 商品管理
    ctx.body = 
    [
      {
        "product_id":1234567,
        "price":132,
        "amount":4,
        "product_name":"火球",
        "content":"品質優良不買後悔",
        "is_empty":0
      }
    ]
  })
  .get('/popular', (ctx) => { // 熱門
    ctx.body = [{
        "product_id": 123456,
        "price": 123
      }
    ]
  })

export default ProductRouter
