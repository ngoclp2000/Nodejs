const http = require('http');
const mysql = require('./mysql_syntax/mysql');
const server =  http.createServer(function (req, res) {
  res.setHeader('Content-type','application/json');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.writeHead(200);
  res.write('Hello World<br>');
  res.write('Now is: ');
  let dataObj = {id:123 , name : "Ngoc" ,email : 'nindaphi@gmail.com'};
  let data = JSON.stringify(dataObj);
  res.end(data);
});
server.listen(3001);
async function test(){
  const nameTable = "song";
  const params = "(name,singer,type,views)";
  const values = "('Hay Trao Cho Anh','Son Tung MTP','Pop',1000000)";
  const condition = "singer = 'Son Tung MTP'";
  const newData = "views = 100";
  const limits = 1;
  await mysql.InsertNewRow(nameTable,params,values);
  const result = await mysql.SelectData(nameTable,"*","",limits);
  console.log(result);
  await mysql.UpdateData(nameTable,newData,condition);
  const result2 = await mysql.SelectData(nameTable,"*","",limits);
  console.log(result2);
}
test();