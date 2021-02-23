const mysql = require('mysql');
const config = require('./config');

var mysqlClient = mysql.createConnection({
  host: config.mysqlConfig.host,
  user: config.mysqlConfig.user,
  password: config.mysqlConfig.password,
  port: config.mysqlConfig.port,
  database: config.mysqlConfig.database
});

async function query(sql, callback) {
    mysqlClient.connect(function(err) {
        if (err) throw err;
        console.log("connected");
        mysqlClient.query(sql, function (err, result, fields) {
            if (err) throw err;
            callback(result);
        });
    });
}

module.exports.query = query;