import Router from 'koa-router'

const ReportRouter = new Router()

// route path: /report

ReportRouter
  .get('/:name', (ctx) => {  // 列出檢舉人
    ctx.body = [{
        "name": "莊文藝",
        "Prosecuted_name": "黃浩華",
        "reason": "偷看A片這樣不OK"
      }
    ]
  })

export default ReportRouter
