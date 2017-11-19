import DB_Function from './DB_Function'
import { userListModel } from "../model";

class User extends DB_Function {
  _model = userListModel;
}

export default new User();
