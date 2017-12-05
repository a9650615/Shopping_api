import Router from 'koa-router'
import shopping_cart from '../DB_Class/shoppingcartClass'
const ShoppingCartRouter = new Router()

// route path: /shopping_cart

ShoppingCartRouter
  .post('/', async (ctx) => {
    const body = ctx.request.body
    const DATA = {
      product_id: body.product_id,
      price: body.price,
      amount: body.amount,
      user_id: body.user_id,
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

  .get('/:id', async (ctx) => { // 商品管理
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await shopping_cart.selectAll({ id: ctx.params.shopping_cart_id }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })

  .put('/:id', async (ctx) => {
    const body = ctx.request.body
    const DATA = {
      product_id: body.product_id,
      price: body.price,
      amount: body.amount,
      user_id: body.user_id,
    }
    let err = ''

    try {
      await shopping_cart.update({ id: ctx.params.id }, { DATA }, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err
    });
  })

  .delete('/:id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await shopping_cart.delete({ id: ctx.params.id }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })

export default ShoppingCartRouter
