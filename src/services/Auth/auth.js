import { axios } from '../axios'

export default {

    /**
     * 
     * @param {Object} payload 
     * 
     * get access token from the api
     */
    signIn(payload) {
        return axios.post('oauth/token/',payload)
            .then(({data}) => {
                console.log(data)
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err)
            })
    },



    /* signIn(payload) {
        return axios.post('/admin/signin',payload)
            .then(({data}) => {
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err)
            })
    }, */

    /**
     * 
     * get user information
     */
    getUser() {
        return axios.get('api/user')
            .then(({data}) => {
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err)
            })
    }
}