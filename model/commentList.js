import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let commentListModel = sequelize.define("commentList", {
  //ID: { type: Sequelize.INTEGER },
  product_id: { type: Sequelize.INTEGER },
  content: { type: Sequelize.TEXT },
  user_id: { type: Sequelize.INTEGER },
})
