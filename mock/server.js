let http = require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');
//获取轮播图接口  /sliders
let sliders = require('./sliders');

//fs.readFile要使用path.join规范化路径
function read(callback) {
  fs.readFile(path.join(__dirname, "./", "book.json"), "utf-8", function (err, data) {
    if (err || data.length == 0) {
      callback([]);
    } else {
      callback(JSON.parse(data));
    }
  });
}

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") return res.end(); /*让options请求快速返回*/
  let {
    pathname,
    query
  } = url.parse(req.url);
  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'apllication/json;charset=utf8');
    return res.end(JSON.stringify(sliders));
  }
  if (pathname === '/hot') {
    read(function (books) {
      let hot = books.reverse().slice(0,6);
      res.end(JSON.stringify(hot));
     });
     return;
  }
}).listen(3000);
