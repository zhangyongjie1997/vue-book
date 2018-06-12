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
function write(data,callback){   //写入内容，更新图书列表
  fs.writeFile(path.join(__dirname, "./", "book.json"),JSON.stringify(data),callback);
}

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") return res.end(); /*让options请求快速返回*/
  let {pathname,query} = url.parse(req.url, true); //true把query(url参数)转化成对象   ?id=1
  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'apllication/json;charset=utf8');
    return res.end(JSON.stringify(sliders));
  }
  if (pathname === '/hot') {
    read(function (books) {
      let hot = books.reverse().slice(0, 6);
      res.end(JSON.stringify(hot));
    });
    return;
  }
  if (pathname === '/book') { //对图书的增删改查
    let id = parseInt(query.id); //取出的是字符串
    switch (req.method) { //?id=1
      case 'GET':
        if (!isNaN(id)) { //查询对应id的图书
          read(function (books) {
            let book = books.find(item=>item.bookId===id);
            if(!book){book={}} //如果没取到就返回空对象
            res.setHeader('Content-Type', 'apllication/json;charset=utf8');
            res.end(JSON.stringify(book));
          });
        } else { //获取所有图书
          read(function (books) {
            res.setHeader('Content-Type', 'apllication/json;charset=utf8');
            res.end(JSON.stringify(books.reverse()));
          });
        }
        break;
      case 'POST':
        let str = '';
        req.on('data',chunk=>{
          str += chunk;
        });
        req.on('end',()=>{
          let book = JSON.parse(str);
          read(function (books) {
            book.bookId = book.length?books[books.length-1].bookId+1:1; //给书添加id
            books.push(book);  //这里的books在内存中
            write(books,function(){   //将内存中的books写入json
              res.end(JSON.stringify(book));
            });
          });
        });
        break;
      case 'PUT':
        if(id){ //获取了要修改的id
          let str = '';
          req.on('data',chunk=>{
            str += chunk;   //将请求体发来的数据转换成字符串
          });
          req.on('end',()=>{
            let book = JSON.parse(str);   //将字符串转换成对象赋给book
            read(function (books) {
              books = books.map(item=>{
                if(item.bookId === id){  //找到id相同的书并修改
                  return book;
                }
                return item;
              });
              write(books,function () {
                res.end(JSON.stringify(book));
              });
            });
          });
        }
        break;
      case 'DELETE':
        read(function (books) {
          books = books.filter(item => item.bookId !== id);
          write(books,function(){
            res.end(JSON.stringify({}));  //删除返回空对象
          });
        });
        break;
    }
  }
}).listen(3001);
