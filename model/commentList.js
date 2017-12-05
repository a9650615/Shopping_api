import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let commentModel = sequelize.define("commentList", {
  //ID: { type: Sequelize.INTEGER },
  product_ID: { type: Sequelize.INTEGER },
  content: { type: Sequelize.TEXT },
  from: { type: Sequelize.INTEGER },
})
