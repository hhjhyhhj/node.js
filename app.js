//服务器业务的代码

const handleBlogRoute = require('./src/routes/blog')
const querystring = require('querystring')

//处理POST请求
const getPostData = (req)=>{
    const promise = new Promise((resolve,reject)=>{
        if(req.method === 'POST'){
            resolve({})
            return
        }else if(req.headers['Content-Type'] !== 'application/json'){
            resolve({})
            return
        }
        let postData = ''
        req.on('data',(chunk)=>{
            postData += chunk.toString();
        })
        req.on('end',()=>{
            if(!postData){
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
    return promise
}


const serverHandler = (req,res)=>{
    //设置请求头为json格式
    res.setHeader('Content-Type','application/json')

    //统一获取路由url    ?之前的是请求路径  之后的是请求参数
    const url = req.url
    req.path = url.split('?')[0]

    
    //解析query
    req.query = querystring.parse(url.split('?')[1])

    //处理POST数据
    getPostData(req).then((postData)=>{
        req.body = postData
        const blogData =  handleBlogRoute(req,res)
        if(blogData){
            res.end(
                JSON.stringify(
                    blogData
                )
            )
            return
        }
        //如果没有命中路由
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write('404 NOT Found');
        res.end();
    })

   

}


module.exports = serverHandler