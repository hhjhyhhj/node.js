//创建服务器

const http = require('http')

//引入创建的app.js模块
const serverHandler =require('../app')

//设置端口
let POST = 5000

//创建服务器createServer
const server = http.createServer(serverHandler)

server.listen(POST,()=>{
    console.log('hhhj')
})