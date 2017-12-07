import DB_Function from './DB_Function'
import { orderListDetailModel, productListModel, orderListModel } from "../model";

orderListDetailModel.belongsTo(productListModel, {
  foreignKey: "product_id", targetKey: "id"
});
orderListDetailModel.belongsTo(orderListModel, {
  foreignKey: "order_List_id", targetKey: "id"
});
class OrderDetail extends DB_Function {
  _model = orderListDetailModel;
}

export default new OrderDetail();
