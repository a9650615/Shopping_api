import DB_Function from './DB_Function'
import { shoppingCartModel, productListModel, userListModel } from "../model"; 

shoppingCartModel.belongsTo(productListModel, {
  foreignKey: "product_id", targetKey: "id"
});
shoppingCartModel.belongsTo(userListModel, {
  foreignKey: "user_id", targetKey: "id"
});

class ShoppingCart extends DB_Function {
  _model = shoppingCartModel;
}

export default new ShoppingCart;
