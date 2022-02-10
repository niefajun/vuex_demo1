import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 创建store数据源，提供唯一公共数据
  state: {
    count: 0 // 对应计数器值
  },
  mutations: {},
  actions: {},
  modules: {}
})
