import DB_Function from './DB_Function'
import { shoppingCartModel } from "../model";

class ShoppingCart extends DB_Function {
  _model = shoppingCartModel;
}

export default new ShoppingCart;
