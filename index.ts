// import * as action from './action';
import * as lib from './library';
// import * as DBA from './dbAction'
import * as _ from 'lodash';
// import * as schedule from 'node-schedule';
import * as api from './api';
// import * as task from './dailytask';
import * as model from "./model";
let app = lib.exs();

model;
(async () => { console.log(lib.db.Sequelize.models); await lib.db.Sequelize.sync(); })()


app.use(lib.bodyParser.urlencoded({ extended: false }));//使用postman 需先做解析

app.use('/movieListAPI', api);


app.listen(3000, async function (req: any, res: any) {
  console.log('app is running at port 3000');
});
