const state = {
    app: {
        course_id: "",
        showAddLesson: false,
    },
    showAddLesson: false
}
const getters = {
    
}

const mutations = {
    SET_COURSE_ID(state, payload){
        state.app.course_id = payload
    },

    SET_APP_INFO(state, payload) {
        state.app = payload
    },

    SHOW_ADD_LESSON_PANEL(state) {
        state.showAddLesson =   !state.showAddLesson
    }
}
const actions = {
    setCourseId: ({commit},payload) => {
        commit('SET_COURSE_ID',payload)
        window.localStorage.setItem('app',JSON.stringify(state.app))
    },
    showAddLessonPanel: ({commit}) => {
        commit('SHOW_ADD_LESSON_PANEL')
        window.localStorage.setItem('app',JSON.stringify(state.app))

    },

    setAppInfo: ({commit}, payload) => {
        commit('SET_APP_INFO',payload)
        window.localStorage.setItem('app',JSON.stringify(state.app))

    }
}

export default {
    state, getters, mutations, actions
}