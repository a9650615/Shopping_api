import DB_Function from './DB_Function'
import { orderListDetailModel } from "../model";

class OrderDetail extends DB_Function {
  _model = orderListDetailModel;
}

export default new OrderDetail();
