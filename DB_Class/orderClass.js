import { sequelize } from '../library/DB'
import DB_Function from './DB_Function'
import { orderListModel, userListModel } from "../model";
orderListModel.belongsTo(userListModel, {
  foreignKey: "user_id", targetKey: "id"
});

class Order extends DB_Function {
  _model = orderListModel;

  async Select(id) {
    return await sequelize.query(`
        SELECT * FROM
        (
          (SELECT order_list_id, product_id, amount FROM orderListDetails where order_list_id=? ) AS A
        )
        INNER JOIN productLists ON productLists.id = A.product_id
        
      `,
      { replacements: [id], type: sequelize.QueryTypes.SELECT })
      // RIGHT JOIN
      //   (
      //     select orderLists.id, orderLists.price,orderLists.user_id,
      //     (select name from userLists where id=orderLists.user_id) as user
      //     from orderLists
      //   ) AS B ON A.product_id = B.id GROUP BY A.product_id
  }
}

export default new Order();
