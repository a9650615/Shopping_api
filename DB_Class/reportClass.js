import DB_Function from './DB_Function'
import { reportModel, userListModel } from "../model";
reportModel.belongsTo(userListModel, {
  foreignKey: "user_id", targetKey: "id"
});
reportModel.belongsTo(userListModel, {
  as: 'uesr_from', foreignKey: "from_id", targetKey: "id"
});
class Report extends DB_Function {
  _model = reportModel;
  async findOne(where = {}, option = {}) {
    return await this._model.findOne({ include: [userListModel, { model: userListModel, as: 'uesr_from' }], where })
  }

}

export default new Report();
