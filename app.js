var express = require('express');
var app = express();

app.get('/', function (req, res){
  res.send('안녕');
});

app.listen(3000, function (){
    console.log('3000포트에서 서버 듣는 중');
});
