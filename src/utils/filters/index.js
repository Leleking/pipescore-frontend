/* this folder registers all filters globally */
import moment from 'moment'
const filters =  {
    install(Vue){
        Vue.mixin({
            filters:{
                /* example filter */
                capitalize: (value) =>  {
                    if (!value) return ''
                    value = value.toString()
                    return value.charAt(0).toUpperCase() + value.slice(1)
                },
                date: (value) => {
                    return moment(value,'DD/MM/YYYY').format("dddd MMM Do YYYY");
                },
                dateType2: (value) => {
                    return moment(value,'YYYY-MM-DD').format("ddd MMM Do YYYY");
                },
                age: (value) => {
                    return moment().diff(value,'years');
                }


            }
        })

    }
}

export default filters