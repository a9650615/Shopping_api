import Router from 'koa-router'

const SearchRouter = new Router()

// route path: /search

SearchRouter
  .get('/all', (ctx) => { // 搜尋
    ctx.body = [{
          "product_id": 123456,
          "member_id": 982454,
          "seller_id": 12634894
      }
    ]  
  })

export default SearchRouter;
