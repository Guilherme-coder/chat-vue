import Vue from 'vue'
import VueX from 'vuex'

import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(VueX)

const state = {
    currentMessageInfo: null,
    user: {},
    userToken: null
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
    },
    DOLOGOUT(state) {
        state.user = {}
    },
    UNSETTOKEN(state) {
        state.userToken = null
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
    },
    doLogout: async ({ commit }) => {
        commit('DOLOGOUT')
        commit('UNSETTOKEN')
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
    getters,
    plugins: [vuexLocal.plugin]
})