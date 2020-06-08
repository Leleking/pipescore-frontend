const state ={
    //general loading
    loading:false,

    //custom loading
    fetching: false,
}
const getters = {
    getLoading: state => {
        return state.loading
    }
}
const mutations = {
    SET_LOADING(state,status){
        state.loading = status
    },
    SET_FETCHING(state,status){
        state.fetching = status
    }
}
const actions = {
    setLoading:({commit},status) => {
        commit('SET_LOADING',status)
    },
    setFetching: ({commit},status) => {
        commit('SET_FETCHING',status)
    }
}

export default{
    state,getters,mutations,actions
}