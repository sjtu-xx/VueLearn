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
    sum: 0,
    x: 1,
    y: 2,
    z: 3
}

// 用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
