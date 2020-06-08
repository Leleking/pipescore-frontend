import { axios } from '../axios'

export default {

    /**
    * 
    * get all programs from the api
    */
    getCourses() {
        return axios.get('api/admin/courses')
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
    addCourse(payload) {
        return axios.post('api/admin/courses',payload)
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
    getCourse(id) {
        return axios.get('api/admin/courses/'+id)
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
    * get all modules under course. will return modules and lecturers
    */
    getCourseModules(id) {
        return axios.get('api/admin/course/modules/'+id)
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
    * gets one specific module of a course
    */
    getModule(id) {
        return axios.get('api/admin/modules/'+id)
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
    * 
    * @returns {Object}
    * 
    * add course module 
    */
    addCourseModule(payload) {
        return axios.post('api/admin/modules',payload)
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
    * @param {Object} payload 
    * 
    * edit a module
    */
    updateCourseModule(id,payload) {
        return axios.post('api/admin/modules/'+id,payload)
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
    * 
    * takes object containing the id of the course and an array of the changed position
    */
    updateModulePosition(payload) {
        return axios.post('api/admin/modules/update_position',payload)
        .then( ({data}) => {
            return Promise.resolve(data)
        })
        .catch( (err) => {
            return Promise.reject(err)

        })
    },

    assignLecturer(id, payload) {
        return axios
        .post("api/admin/course/assign_lecturers/" + id, payload)
        .then(({ data }) => {
            return Promise.resolve(data);
        })
        .catch(err => {
            return Promise.reject(err);
        });
    }
}