import Router from 'koa-router'
import User from '../DB_Class/userclass'
const UserRouter = new Router()

// route path: /management

UserRouter
  .post('/register', async (ctx) => {
    const body = ctx.request.body
    let DATA = {
      account: body.account,
      password: body.password,
      name: body.name,
      role: 3,
      content: body.content
    }
    let err = ''
    let exist = await User.findAll({ account: body.account });
    try {
      if (exist.length) {
        throw "已有相同帳號";
      }
      DATA = await User.insert(DATA)
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err,
      data: DATA
    });
  })
  .post('/login', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'
    console.log(body)
    DATA = await User.findOne({ account: body.account, password: body.password })
    //DATA.password = null;
    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })
  .get('/:userid', async (ctx) => {
    let DATA = {}
    let err = 'Not Found'
    try {
      DATA = await User.findOne({ id: ctx.params.userid }, {})
      DATA.password = null;
    } catch (e) {
      err = e;
    }

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })
  .put('/:userid', async (ctx) => {
    const body = ctx.request.body
    let DATA = {
      password: body.password,
      name: body.name,
      content: body.content
    }
    let err = ''

    try {
      DATA = await User.update({ id: ctx.params.userid }, DATA, {})
      DATA.password = null;
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err,
      data: DATA
    });
  })

  .delete('/:userid', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await User.delete({ id: ctx.params.userid }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })



export default UserRouter
