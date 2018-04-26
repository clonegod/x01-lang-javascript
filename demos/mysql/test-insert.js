var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'lt7116',
  database : 'test'
});
 
connection.connect();

var  sql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var  params = ['NodeJS', 'http://nodejs.cn/api/http.html','23453', 'CN'];

//增
connection.query(sql, params, function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ', err.message);
         return;
        }        
 
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:', result.insertId);        
       console.log('INSERT ID:', result);    
       console.log('-----------------------------------------------------------------\n\n');  
});
 
connection.end();