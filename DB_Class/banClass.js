import DB_Function from './DB_Function'
import { banListModel } from "../model";

class Ban extends DB_Function {
  _model = banListModel;
}

export default new Ban();
