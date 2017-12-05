import DB_Function from './DB_Function'
import { commentListModel, productListModel, userListModel } from "../model";

commentListModel.belongsTo(productListModel, {
  foreignKey: "product_id", targetKey: "id"
});
commentListModel.belongsTo(userListModel, {
  foreignKey: "user_id", targetKey: "id"
});


class Comment extends DB_Function {
  _model = commentListModel;

  async findAllByProductid(where = {}, option = {}) {
    return await this.findAll(where, { include: [userListModel] })
  }
}

export default new Comment();
