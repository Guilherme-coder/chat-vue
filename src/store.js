import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const state = {
    currentMessageInfo: null,
    user: {},
    userToken: ''
}

const mutations = {
    SELECTMESSAGEINFO(state, payload) {
        state.currentMessageInfo = payload
    },
    DOLOGIN(state, payload) {
        state.user = payload
    },
    SETTOKEN(state, payload) {
        state.userToken = payload
    }
}

const actions = {
    selectMessageInfo: async ({ commit }, payload) => {
        console.log('mudando mensagem')
        commit('SELECTMESSAGEINFO', payload)
    },
    doLogin: async ({ commit }, payload) => {
        commit('DOLOGIN', payload)
    },
    setToken: async ({ commit }, payload) => {
        commit('SETTOKEN', payload)
    }
}

const getters = {
    getMessageInfo: state => state.currentMessageInfo,
    getUserToken: state => state.userToken,
    getUser: state => state.user
}

export default new VueX.Store({
    state,
    mutations,
    actions,
    getters
})