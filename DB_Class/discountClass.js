import DB_Function from './DB_Function'
import { discountListModel, productListModel } from "../model";


class Discount extends DB_Function {
  _model = discountListModel;
}

export default new Discount();
