const log = (request, response, next)=>{
    const {url, method} = request;
    console.log(method + "acessado - " + url + " na " + new Date())
    next()
};

module.exports = log;