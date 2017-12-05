import DB_Function from './DB_Function'
import { orderListModel, userListModel } from "../model";
orderListModel.belongsTo(userListModel, {
  foreignKey: "user_id", targetKey: "id"
});
class Order extends DB_Function {
  _model = orderListModel;
}

export default new Order();
