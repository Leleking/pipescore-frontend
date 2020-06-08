/* eslint-disable */

import { GlobalComponents } from './modules'
import  filters    from '../filters'
import vbclass from 'vue-body-class'
import {router} from '../../router'
import VeeValidate from 'vee-validate'
import Snotify from 'vue-snotify'
import CKEditor from '@ckeditor/ckeditor5-vue'
import "vue-snotify/styles/material.css"


const plugins = {
    install(Vue,options){
        Vue.config.productionTip = !process.env.VUE_APP_DEBUG
        //plugins
        Vue.use( vbclass, router )
        Vue.use(VeeValidate)
        GlobalComponents()
        Vue.use(filters)
        Vue.use(Snotify, { toast: { showProgressBar: false } })
        Vue.use( CKEditor )
        
        

    }
}
export default plugins