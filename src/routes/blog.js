const { SuccessModule, ErrorModule } = require("../module/responseModule")
const {getList, getDetail ,createNewBlog, updataBlog,deleteBlog} = require('../controllers/blog')

//处理博客相关的路由
const handleBlogRoute = (req,res) => {
    //定义处理路由的逻辑
    const method = req.method;
    const id = req.query.id
    const blogData = req.body
    if(method === 'GET' && req.path === '/api/blog/list'){

        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author,keyword)
        return new SuccessModule(listData)
    }else if(method === 'GET' && req.path === '/api/blog/detail'){
        const detailData = getDetail(id)
        return new SuccessModule(detailData)
    }
    if(method === 'POST' && req.path === '/api/blog/new'){
        const createBlog = createNewBlog(blogData)
        return new SuccessModule(createBlog)
    }
    if(method === 'POST' && req.path === '/api/blog/update'){
        //更新博客
       const updataBlogData = updataBlog(id,blogData)
       if(updataBlogData){
        return new SuccessModule('更新博客成功')
       }else{
        return new ErrorModule('更新博客失败')
       }
    }
    if(method === 'POST' && req.path === '/api/blog/delete'){
        const deleteBlogData = deleteBlog(id)
        if(deleteBlogData){
            return new SuccessModule('删除博客成功')
           }else{
            return new ErrorModule('删除博客失败')
           }
    }
}

module.exports = handleBlogRoute;