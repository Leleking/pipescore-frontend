import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import {routes} from './routes'

Vue.use(Router)
export const router = new Router({
    mode: 'history',
    routes,
    linkExactActiveClass: 'active',

})

router.beforeEach( (to, from, next) => {
  if(JSON.parse(window.localStorage.getItem('authUser'))) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    //authUser && authUser.access_token
    if( authUser ){
      store.dispatch('setAuthUser',authUser)
    }
  }
  if(JSON.parse(window.localStorage.getItem('app'))) {
    const app = JSON.parse(window.localStorage.getItem('app'))
    //app && app.access_token
    if( app ){
      store.dispatch('setAppInfo',app)
    }
  }

  if(to.meta.requiresAuth) {
    if(JSON.parse(window.localStorage.getItem('authUser'))) {
      const authUser = JSON.parse(window.localStorage.getItem('authUser'))
      if(authUser && authUser.sz_email){
        store.dispatch('setAuthUser',authUser)
        next()
      }
    }else {
      next({name:'Login'})
      }
    }else{
      next()
    }


})