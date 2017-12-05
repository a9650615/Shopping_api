import DB_Function from './DB_Function'
import { productListModel, discountListModel, userListModel } from "../model";

productListModel.belongsTo(discountListModel, {
  foreignKey: "discount_id", targetKey: "id"
});
productListModel.belongsTo(userListModel, {
  foreignKey: "user_id", targetKey: "id"
});

class Product extends DB_Function {
  _model = productListModel;

  async findAllByUserid(where = {}, option = {}) {
    return await this.findAll(where, { include: [userListModel] })
  }

  async findAllWithOption(where = {}, option = {}) {
    return await this._model.findAll({ include: [userListModel], limit: 10, order: [["createdAt", "DESC"]] })
  }
}

export default new Product();
