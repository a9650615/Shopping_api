import { sequelize } from '../library/DB'
import DB_Function from './DB_Function'
import { orderListModel, userListModel } from "../model";
orderListModel.belongsTo(userListModel, {
  foreignKey: "user_id", targetKey: "id"
});

class Order extends DB_Function {
  _model = orderListModel;

  async Select(id) {
    await sequelize.query(`
        SELECT * FROM (
          select orderLists.id, orderLists.price,orderLists.user_id,
          (select name from userLists where id=orderLists.id) as user
          from orderLists WHERE id = ?
        ) AS B
        RIGHT OUTER JOIN (SELECT * FROM orderListDetails) AS A ON A.product_id = B.id
      `,
      { replacements: [id], type: sequelize.QueryTypes.SELECT })
  }
}

export default new Order();
