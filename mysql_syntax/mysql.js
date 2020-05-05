const mysql = require('mysql');
const logger = require('logger');
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mastercoding2709",
  database: "WebMusic"
});

exports.CreateTable = (nameTable, values) => {
  // Create new Table
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE " + nameTable + " " + values;
    console.log(sql);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
};

exports.InsertNewRow = (nameTable, params, values) => {
  return new Promise(resolved => {
    let sql_check = "SELECT * FROM " + nameTable + " WHERE " + params + " = " + values;
    let sql = "INSERT INTO " + nameTable + " " + params + " VALUES " + values;
    con.query(sql_check, (err, row) => {
      if (err) {
        logger.error('Error in DB');
        logger.debug(err);
        return;
      } else {
        setTimeout(() => {
          if (row && row.length) {
            console.log('New row has been existed');
            resolved("Error");
          } else {
            con.query(sql, (err, result) => {
              if (err) throw err;
              console.log("1 record inserted");
              resolved();
            });
          }
        }, 0);
      }
    });
  })
};
exports.SelectData = (nameTable, field, condition,limits) => {
  // Return the result select from database
  return new Promise(resolved => {
    setTimeout(() => {
      let sql = "SELECT " + field + " FROM " + nameTable + " " + condition + " LIMIT "+limits;
      con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Collecting data successfully");
        resolved(result);
      });
    }, 0);
  });
}
exports.DeleteRow = (tableName, condition) => {
  return new Promise(resolved=>{
    
    let sql = "DELETE FROM " + tableName + " WHERE " + condition+";";
    console.log(sql);
    con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
    resolved();
    })

  });
}
exports.DropTable = (tableName)=>{
  return new Promise(resolved =>{
    if (err) throw err;
    var sql = "DROP TABLE "+ tableName;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table deleted");
      resolved();
    });
  })
}
exports.UpdateData = (tableName,newData,condition)=>{
  return new Promise(resolved=>{
    let sql = "UPDATE " + tableName + " SET " + newData + " WHERE " + condition;
    con.query(sql,(err,result)=>{
      if(err) throw err;
      console.log(result.affectedRows + " record(s) updated");
      resolved();
    })
  })
}