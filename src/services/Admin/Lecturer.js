import { axios } from "../axios";

export default {
    /**
    *
    * get all programs from the api
    */
    getLecturers(payload) {
        return axios
        .post("lect", payload)
        .then(({ data }) => {
            return Promise.resolve(data);
        })
        .catch(err => {
            return Promise.reject(err);
        });
    },

}