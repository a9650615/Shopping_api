import DB_Function from './DB_Function'
import { orderListModel } from "../model";

class Order extends DB_Function {
  _model = orderListModel;
}

export default new Order();
