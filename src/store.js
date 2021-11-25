import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const state = {
    currentMessageInfo: null
}

const mutations = {
    SELECTMESSAGEINFO(state, payload) {
        state.currentMessageInfo = payload
    }
}

const actions = {
    selectMessageInfo: async ({ commit }, payload) => {
        console.log('mudando mensagem')
        commit('SELECTMESSAGEINFO', payload)
    }
}

const getters = {
    getMessageInfo: state => state.currentMessageInfo
}

export default new VueX.Store({
    state,
    mutations,
    actions,
    getters
})