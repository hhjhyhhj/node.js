class BaseModule {
    constructor(data,message){
        if(data){
            this.data = data
        }else if(message){
            this.message = message
        }else if(typeof data === 'string'){
            this.message = data
            data = null
            message = null
        }
    }
}


//定义成功的模型
class SuccessModule extends BaseModule{
    constructor(data,message){
        super(data,message)
        this.errno = 0
    }
}


//定义失败的模型
class ErrorModule extends BaseModule{
    constructor(data,message){
        super(data,message)
        this.errno = -1
    }
}

module.exports = {
    SuccessModule,
    ErrorModule
}
