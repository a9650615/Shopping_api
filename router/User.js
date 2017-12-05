import Router from 'koa-router'
import User from '../DB_Class/userclass'
const UserRouter = new Router()

// route path: /management

UserRouter
  .post('/login', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'
    console.log(body)
    DATA = await User.select({ account: body.account, password: body.password })

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })
  .get('/id/:userId', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await User.selectOne({ id: ctx.params.userId }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })
  .put('/:id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {
      account: body.account,
      password: body.password,
      name: body.name,
      role: body.role,
      text: body.info
    }
    let err = ''

    try {
      await User.update({ id: ctx.params.userId }, { DATA }, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err,
      data: DATA
    });
  })

  .delete('/:memberId', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await User.delete({ id: ctx.params.userId }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })



export default UserRouter
