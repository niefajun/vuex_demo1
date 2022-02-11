import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 创建store数据源，提供唯一公共数据
  state: {
    count: 0 // 对应计数器值
  },
  mutations: {
    // 不带参数情况
    add (state) {
      // 变更状态
      state.count++
    },
    // 带参数情况
    addN (state, step) {
      state.count += step
    },
    sub (state) {
      // 变更状态
      state.count--
    },
    subN (state, step) {
      state.count -= step
    }
  },
  actions: {},
  modules: {}
})
