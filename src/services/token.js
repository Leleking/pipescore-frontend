const getHeader = function () {
    if(JSON.parse(window.localStorage.getItem('authUser'))) {
        const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
        const headers = {
            Accept:'application/json',
            Authorization:'Bearer ' + tokenData.access
        }
        return headers
    }else{
        const headers = {
            Accept:'application/json',
            
        }
        return headers
    }
  
}

//add token for all urls except these ones
const  url_exceptions = ['/api/jwtauth/token/','/api/test']

export {
    getHeader, url_exceptions
}