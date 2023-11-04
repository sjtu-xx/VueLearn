import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)

const countOptions = {
    namespaced: true, // 开启命名空间
    actions: {},
    mutations: {},
    state: {},
    getters: {}
}

export default new Vuex.Store({
        modules: {
            a: countOptions
        }
    }
)
