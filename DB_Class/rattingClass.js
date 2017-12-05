import DB_Function from './DB_Function'
import { rattingListModel, productListModel, userListModel } from "../model";


rattingListModel.belongsTo(productListModel, {
  foreignKey: "product_id", targetKey: "id"
});
rattingListModel.belongsTo(userListModel, {
  foreignKey: "user_id", targetKey: "id"
});


class Ratting extends DB_Function {
  _model = rattingListModel;

  async findAll(where = {}, option = {}) {
    return await this._model.findAll({ where, include: [userListModel, productListModel] })
  }
}

export default new Ratting();
