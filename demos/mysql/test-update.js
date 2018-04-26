var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'lt7116',
  database : 'test'
});
 
connection.connect();

var sql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var params = ['nodejs', 'http://nodejs.cn/', 6];
//改
connection.query(sql, params, function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ', err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows', result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});
 
connection.end();