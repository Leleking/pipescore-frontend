import { axios } from '../axios'

export default {

    /**
    * 
    * get all programs from the api
    */
    index(model) {
        return axios.get('api/'+model)
            .then(({data}) => {
                    
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err)
        })
    },

    show(model,id) {
        return axios.get('api/admin/'+model+'/'+id)
            .then(({data}) => {
                    
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err)
        })
    },

    /**
    * 
    * @param {Integer} id 
    * 
    * delete a category with all it's products
    */
    delete(model,id) {
        return axios.delete('api/admin/'+model+'/'+id)
            .then(({data}) => {
                    
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err)
        })
    },

    /**
    * 
    * @param {Object} payload
    * 
    * add category 
    */
    add(model,payload) {
        return axios.post('api/'+model,payload)
            .then( ({data}) => {
                return Promise.resolve(data)
            })
            .catch( (err) => {
                return Promise.reject(err)

            })
    },


    /**
    * 
    * @param {Object} payload 
    * @param {Integer} id 
    */
    update(model,payload,id) {
        return axios.put('api/admin/'+model+'/'+id,payload)
            .then( ({data}) => {
                return Promise.resolve(data)
            })
            .catch( (err) => {
                return Promise.reject(err)

            })
    },
    
}