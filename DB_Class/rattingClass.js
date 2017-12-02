import DB_Function from './DB_Function'
import { rattingListModel } from "../model";

class Comment extends DB_Function {
  _model = rattingListModel;
}

export default new Comment();
