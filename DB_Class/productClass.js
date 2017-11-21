import DB_Function from './DB_Function'
import { productModel } from "../model";

class Product extends DB_Function {
  _model = productModel;
}

export default new Product();
