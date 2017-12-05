import Router from 'koa-router'
import report from '../DB_Class/reportClass'
const ReportRouter = new Router()

// route path: /report

ReportRouter
  .get('/:member_Id', async (ctx) => {
    const body = ctx.request.body
    let DATA = {}
    let err = 'Not Found'

    DATA = await report.selectOne({ member_Id: ctx.params.member_Id }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })

  .post('/', async (ctx) => {
    const body = ctx.request.body
    const DATA = {
      Prosecuted_id: ctx.body.Prosecuted_id,
      reason: ctx.body.reason,
    }
    let err = ''

    try {
      await report.insert({ DATA }, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err
    });
  })
export default ReportRouter
