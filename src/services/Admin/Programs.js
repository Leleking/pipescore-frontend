import { axios } from '../axios'

export default {

    /**
    * 
    * get all programs from the api
    */
    getPrograms() {
        return axios.get('api/admin/programs')
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
    * add program to the system.
    */
    addProgram(payload) {
        return axios.post('api/admin/programs',payload)
            .then( ({data}) => {
                return Promise.resolve(data)
            })
            .catch( (err) => {
                return Promise.reject(err)

            })
    },

    /**
    * 
    * @param {Integer} id 
    * 
    * get one specific program
    */
    getProgram(id) {
        return axios.get('api/admin/programs/'+id)
            .then( ({data}) => {
                return Promise.resolve(data)
            })
            .catch( (err) => {
                return Promise.reject(err)

            })
    },
}