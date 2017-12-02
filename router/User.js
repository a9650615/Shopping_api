import Router from 'koa-router'
import User from '../DB_Class/userclass'

const UserRouter = new Router()

UserRouter
  .get('/:userId', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await User.select({ id: ctx.params.userId })

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })
  .post('/', async (ctx) => {
    const body = ctx.request.body
    const DATA = {
      account: body.account,
      password: body.password,
      name: body.name,
      role: 3,
      text: body.info
    }
    let err = ''

    try {
      await User.insert(DATA)
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err
    });
    // ctx.body = 'create user'
  })

export default UserRouter
