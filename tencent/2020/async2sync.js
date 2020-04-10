const http = require("http");
const net = require("net");

/*
  http同步处理请求问题, 异步http请求转同步方式处理
  https://blog.csdn.net/wanglei20116527/article/details/62892070
  先通过net建立服务器，然后将请求保存在一个队列当中，然后从队列中慢慢的处理请求，就能够实现http的同步请求了
*/

//　保存请求的队列，每个元素都是一个socket
let watingQueue = [];

//　当前处理的请求
let curtSocket = null;

let count = 0;

//　建立一个http服务器
let httpServer = http.createServer(function (req, res) {
  // 延迟一秒中回复
  setTimeout(function () {
    res.end(`request: ${++count}`, "utf8");
  }, 1000);

  res.on("finish", function () {
    curtSocket = null;
    //　一个请求结束了，处理下一个请求
    dealRequest();
  });
});

// 建立一个tcp的服务器（http协议是建立在tcp协议上的）
net
  .createServer(function (socket) {
    //　将请求压入列队
    enqueueSocket(socket);

    //　处理请求（如果现在真在处理的请求，不做任何处理）
    dealRequest();
  })
  .listen(4000);

function enqueueSocket(socket) {
  watingQueue.push(socket);
}

function dealRequest() {
  if (curtSocket != null || watingQueue.length <= 0) {
    return;
  }

  curtSocket = watingQueue.shift();
  httpServer.emit("connection", curtSocket);
}
