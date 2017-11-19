import Router from 'koa-router'
import PostRouter from './router/post'

const router = new Router();
router.use(PostRouter.routes());

router
  .get('/', function (ctx, next) {
    ctx.body = 'Hello World!';
  })
  .get('/product/all', (ctx) => { // 商品管理
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

  .get('/report/Name', (ctx) => { // 列出檢舉人
    ctx.body = [{
        "name": "莊文藝",
        "Prosecuted_name": "黃浩華",
        "reason": "偷看A片這樣不OK"
      }
    ]
  })

  .get('/shopping_cart/all', (ctx) => { // 購物車商品
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

  .get('/discount/product_id:', (ctx) => { // 折扣
    ctx.body = [{
        product:[{
           "product_id" : 213456,
            "product_name": "火球",
            "price" : 1234
         }]
        }
     ]
  })

  .get('/order/order_list_id:', (ctx) => { // 訂單
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

  .get('/comment/all', (ctx) => { // 評語(評分)
    ctx.body = [{
        "content": "賣得好爛",
        "product_id": 123456,
        "from_member_name": "黃浩華"
      }
    ]
  })

  .get('/search/all', (ctx) => { // 搜尋
    ctx.body = [{
          "product_id": 123456,
          "member_id": 982454,
          "seller_id": 12634894
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

export default router;
