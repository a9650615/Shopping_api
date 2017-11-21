import DB_Function from './DB_Function'
import { reportModel } from "../model";

class Report extends DB_Function {
  _model = reportModel;
}

export default new Report();
