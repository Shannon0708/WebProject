
var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    port: '3306',
    user: "root",
    password: "Ilovecsie4ever",
    database: "webprogram"
});
/*
var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>feedback</title></head>' +
  '<body>' +
  '<form method="post">' +
  '暱稱： <input name="username"><br>' +
  '內容： <input name="feedback"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析參數
    body = querystring.parse(body);
    // 設置響應head信息及編碼
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) {             //輸出提交的數據
        res.write("暱稱：" + body.username);
        res.write("<br>");
        res.write("內容：" + body.feedback);
    } else {                                // 輸出結果
        res.write(postHTML);
    }
    res.end();
  });
}).listen(3306);
*/

/*
con.connect(function(err) {
    if (err) {
        console.log('connecting error');
        var sql = 'SELECT * FROM feedback;'
        con.query(sql, function(err, result) {
            console.log(result);
            console.log("Test");
        });
        
        return;
    }
    console.log('connecting success');
});
*/ 

var sql = 'SELECT * FROM feedback';
var Message = 'INSERT INTO feedback(nickname, feedback) VALUES ("王小明", "我想捐書")'; 

con.query(Message, function(err, result) {
    if(err) {
        console.log('[INSERT] - ', err.message);
        return;
    } else {
        console.log('------INSERT---------');
        console.log(result);
        console.log('-------------------\n\n');

    }
});

//查
con.query(sql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }

   console.log('---------SELECT---------');
   console.log(result);
   console.log('--------------------\n\n');
});


con.end();
