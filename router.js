import Router from 'koa-router'

import CommentRouter from './router/Comment'
import DiscountRouter from './router/Discount'
import OrderRouter from './router/Order'
import ProductRouter from './router/Product'
import ReportRouter from './router/Report'
import SearchRouter from './router/Search'
import ShoppingCartRouter from './router/ShoppingCart'

const router = new Router();

router.use('/comment', CommentRouter.routes())
router.use('/discount', DiscountRouter.routes())
router.use('/order', OrderRouter.routes())
router.use('/product', ProductRouter.routes())
router.use('/report', ReportRouter.routes())
router.use('/search', SearchRouter.routes())
router.use('/shopping_cart', ShoppingCartRouter.routes())

router
  .get('/', function (ctx, next) {
    ctx.body = 'Hello World!';
  })

export default router;
