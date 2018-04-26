var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'lt7116',
  database : 'test'
});
 
connection.connect();

var sql = 'DELETE FROM websites where id=6';
//删
connection.query(sql, function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ', err.message);
          return;
        }        
 
       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows', result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
});
 
connection.end();