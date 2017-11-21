import DB_Function from './DB_Function'
import { commentListModel } from "../model";

class Comment extends DB_Function {
  _model = commentListModel;
}

export default new Comment();
