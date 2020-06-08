import AuthServices from '../../services/Auth/auth'
const state = {
    authUser: null,
    
}

const getters = {

}

const mutations = {

    SET_ACCESS_TOKEN(state,payload) {
        state.authUser = payload
    },

    SET_AUTH_USER(state,payload) {
        state.authUser = {...state.authUser,...payload}
    },

    UNSET_AUTH_USER(state){
        state.authUser = ''
    }
    
}
const actions = {

    setAuthUser:( {commit}, payload) => {
        commit('SET_AUTH_USER',payload)
        window.localStorage.setItem('authUser',JSON.stringify(state.authUser))
    },
    
    loginUser:( {commit}, payload ) => {
        commit('SET_ACCESS_TOKEN',payload)
        window.localStorage.setItem('authUser',JSON.stringify(state.authUser))
        
    },

    getUser: ({commit}) => {
        return AuthServices.getUser()
            .then((response) => {
                commit('SET_AUTH_USER',response)
                window.localStorage.setItem('authUser',JSON.stringify(state.authUser))
                return Promise.resolve(response)
            })
            .catch((error) => {
                return Promise.reject(error)
        })
    },

    unsetAuthUser: ({commit}) => {
        commit('UNSET_AUTH_USER')
        window.localStorage.removeItem('authUser')
    },
}
export default {
    state, getters, mutations, actions
}