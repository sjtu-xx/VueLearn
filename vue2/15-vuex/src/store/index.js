import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)

const actions = {
    jia: function (context, param) {
        context.commit('JIA', param)
    }
}
const mutations = {
    JIA: function (state, value) {
        console.log(state)
        state.sum = state.sum + value
    }
}
const state = {
    sum: 0
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})
