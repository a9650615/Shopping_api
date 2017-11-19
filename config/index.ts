import { Options } from "sequelize"
let dbSet = {
    //資料庫配置設定
    dbType: "mysql",
    account: "Frank",
    password: "Anyong42859742",
    host: "data.anyong.com.tw",
    port: "3306",
    dbName: "movie",
    option: { timezone: "+08:00", logging: true } as Options
};

let SMTPConfig = {
    //信箱配置設定
    user: "frankboygx@gmail.com",
    pass: "ozfeombeiwgghljn",
}

export {
    dbSet,
    SMTPConfig,
};
