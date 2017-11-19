import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let banListlModel = sequelize.define("banList", {
  //ID: { type: Sequelize.INTEGER },
  user_ID: { type: Sequelize.INTEGER },
  ban_Type: { type: Sequelize.INTEGER },
  create_Time: { type: Sequelize.DATEONLY }
})