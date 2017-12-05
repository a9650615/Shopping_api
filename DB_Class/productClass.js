import DB_Function from './DB_Function'
import { productModel, discountListModel, userListModel } from "../model";

productModel.belongsTo(discountListModel, {
  foreignKey: "discount_id", targetKey: "id"
});
productModel.belongsTo(userListModel, {
  foreignKey: "user_id", targetKey: "id"
});

class Product extends DB_Function {
  _model = productModel;

  async findAllByUserid(where = {}, option = {}) {
    return await this.findAll(where, { include: [userListModel] })
  }

  async findAllWithOption(where = {}, option = {}) {
    return await this._model.findAll({ include: [userListModel], limit: 10, order: [["createdAt", "DESC"]] })
  }
}

export default new Product();
