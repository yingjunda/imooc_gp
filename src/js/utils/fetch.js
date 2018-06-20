//封装的请求  带超时
const _timeout = 30*1000  //默认30秒


//超时promise
function timeoutPromise(timeout){
    let dispatchTimeout = null;
    const timeoutPromise =  new Promise((resolve, reject) => {
        dispatchTimeout = () => {
            reject('请求超时')
        }
    })
    setTimeout(() => {
        dispatchTimeout();
    }, timeout);
}

//get 请求
function getPromise(url,body,showWaiting){
    var url=url.indexOf("?")>0?url:(url+'?')
    return new Promise((resolve, reject) => {
        fetch(url+$param(body), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                resolve(responseData)
            })
            .catch((error) => {
                reject(error);
            })
    })
}

function postPromise(url,body,showWaiting) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: $param(body),
        })
            .then((response) => response.json())
            .then((responseData) => {
                resolve(responseData)
            })
            .catch((error) => {
                reject(error)
            });
    })
}

function jsonParam(param,traditional){
    if(!isType(obj)) return {};
    let paramStr='';
   /* for(var m in param){
        var obj=param[m];
    if(Object.prototype.toString.call(obj)=='[object Array]'){
        var arrStr=obj.join('')
    }
        paramStr+=m+"="+param[m]+"&"
    }*/
}

function isPlainObject(obj) {
    let type=Object.prototype.toString.call(obj);

    if(type=='[object Object]'){
        return true;
    }
    return false;
}


let escape = encodeURIComponent

function serialize(params, obj, traditional, scope){
    var type, array = isArray(obj), hash = isPlainObject(obj);

    for(var key in obj){
        var value=obj[key];
        type = typeof(value)
        if (scope) key = traditional ? scope :
            scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
        // handle data in serializeArray() format
        if (!scope && array) params.add(value.name, value.value)
        // recurse into nested objects
        else if (type == "array" || (!traditional && type == "object"))
            serialize(params, value, traditional, key)
        else params.add(key, value)
    }
}

function isArray(obj) {
    return Object.prototype.toString.call(obj)=='[object Array]'
}
function $param(obj, traditional){
    var params = []
    params.add = function(key, value) {

        if (value == null) value = ""
        this.push(escape(key) + '=' + escape(value))
    }
    serialize(params, obj, traditional)
    return params.join('&').replace(/%20/g, '+')
}


//GET请求
function GET(url,body, timeout = _timeout) {

    return Promise.race([getPromise,timeoutPromise]);
}
//POST请求
function POST(url, version, body, timeout = _timeout) {

    return Promise.race([postPromise,timeoutPromise]);
}

export { GET, POST ,postPromise,getPromise,$param}