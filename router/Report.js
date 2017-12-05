import Router from 'koa-router'
import report from '../DB_Class/reportClass'
const ReportRouter = new Router()

// route path: /report

ReportRouter
  .get('/:reportid', async (ctx) => {
    let DATA = {}
    let err = 'Not Found'

    DATA = await report.findOne({ id: ctx.params.reportid }, {})

    ctx.body = JSON.stringify(Object.assign({
      status: DATA != null,
      msg: DATA == null ? err : ''
    }, DATA ? DATA.dataValues : null));
  })

  .post('/', async (ctx) => {
    const body = ctx.request.body
    let DATA = {
      user_id: body.user_id,
      reason: body.reason,
      from_id: body.from_id
    }
    let err = ''

    try {
      DATA = await report.insert(DATA, {})
    } catch (e) {
      err = e
    }

    ctx.body = JSON.stringify({
      status: !err,
      msg: err,
      data: DATA
    });
  })
export default ReportRouter
