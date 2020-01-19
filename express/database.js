var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '172.25.28.10',
  user: 'r2m',
  password: 'r2m@123456',
  database: 'r2m'
})

connection.connect()

// connection.query('SELECT 1 + 1 AS solution', (error, results, fileds) => {
//   if (error) throw error
//   console.log('The solution is:', results[0].solution)
// })

// connection.query('SELECT * from r2m_proxy_group', (err, result) => {
//   console.log(result)
// })

connection.query('show tables', (err, res) => {
  console.log(res)
})

// var  addSql = 'INSERT INTO r2m_proxy_group(id,name,description,created_date,modified_date) VALUES(0,?,?,?,?)'
// var  addSqlParams = ['菜鸟工具', '菜鸟', new Date(), new Date()]

// connection.query(addSql,addSqlParams,function (err, result) {
//   if(err){
//    console.log('[INSERT ERROR] - ',err.message);
//    return;
//   }        

//  console.log('--------------------------INSERT----------------------------');
//  //console.log('INSERT ID:',result.insertId);        
//  console.log('INSERT ID:',result);        
//  console.log('-----------------------------------------------------------------\n\n');  
// })

// var modSql = 'UPDATE r2m_proxy_group SET name = ?,description = ? WHERE Id = ?';
// var modSqlParams = ['菜鸟移动站', '啦啦啦',16];
// //改
// connection.query(modSql,modSqlParams,function (err, result) {
//    if(err){
//          console.log('[UPDATE ERROR] - ',err.message);
//          return;
//    }        
//   console.log('--------------------------UPDATE----------------------------');
//   console.log('UPDATE affectedRows',result.affectedRows);
//   console.log('-----------------------------------------------------------------\n\n');
// });

// var delSql = 'DELETE FROM r2m_proxy_group where id=16';
// //删
// connection.query(delSql,function (err, result) {
//         if(err){
//           console.log('[DELETE ERROR] - ',err.message);
//           return;
//         }        
 
//        console.log('--------------------------DELETE----------------------------');
//        console.log('DELETE affectedRows',result.affectedRows);
//        console.log('-----------------------------------------------------------------\n\n');  
// });

connection.end()