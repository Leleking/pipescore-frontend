/* eslint-disable eol-last */
import Axios from 'axios'
import { getHeader, url_exceptions} from './token'

const instance  =  Axios.create({
    baseURL: process.env.VUE_APP_API_DOMAIN, 
    responseType: 'json',
    timeout: 20000
})

const axios = instance;


axios.interceptors.request.use(function(config) {
    var header = getHeader()
    url_exceptions.forEach(url => {
        if(url !== config.url) {
            config.headers.Authorization  = `${header.Authorization}`;
            config.headers.Accept  = "application/json"
           
        } else {
            config.headers.Accept = 'application/json'
        }
    });
    return config
})



export {
    axios
}