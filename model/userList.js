import * as Sequelize from 'sequelize';
import { sequelize } from "../library/DB";

export let userListModel = sequelize.define("userList", {
  // ID: { type: Sequelize.INTEGER },
  account: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  name: { type: Sequelize.STRING },
  role: { type: Sequelize.INTEGER },
  text: { type: Sequelize.TEXT },
  last_Login: { type: Sequelize.DATEONLY },
})