//博客相关的方法
const getList = (author,keyword)=>{
    //从数据库中获取数据
    //先返回假数据
    return [{
        id:1,
        title:'标题1',
        content:'内容1',
        author:'张三',
        keyword:'2',
        createdAt:'1641383457306'
    },{
        id:1,
        title:'标题1',
        content:'内容1',
        author:'李四',
        keyword:'1',
        createdAt:'1641383498321'
    },]
}

//获取博客详情
const getDetail = (id)=>{
            //先返回一个假数据
            return [{
                id:1,
                title:'标题1',
                content:'内容1',
                author:'张三',
                keyword:'2',
                createdAt:'1641383457306'
            },{
                id:1,
                title:'标题1',
                content:'内容1',
                author:'李四',
                keyword:'1',
                createdAt:'1641383498321'
            },]
            }

//新建博客
const createNewBlog = (blogData)=>{
    //先返回一个假数据
    return [{
        id:1,
    }]
    }

//更新博客
const updataBlog = (id,blogData = '')=>{
    //先返回一个假数据
    return true
    }

//更新博客
const deleteBlog = (id)=>{
    //先返回一个假数据
    return true
    }

module.exports = {
    getList,
    getDetail,
    createNewBlog,
    updataBlog,
    deleteBlog
}