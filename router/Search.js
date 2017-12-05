import Router from 'koa-router'
import Product from '../DB_Class/productClass'
import User from '../DB_Class/userclass'
const SearchRouter = new Router()

// route path: /search

SearchRouter
  .get('/:member_Id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await Product.selectOne({ id: ctx.params.product_id }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })
  .get('/:product_Id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await User.selectOne({ id: ctx.params.userId }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })

export default SearchRouter;
