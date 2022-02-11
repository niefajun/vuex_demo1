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
    // 测试方法，用于测试在mutation中定义方法使用异步操作的情况
    addMutationAsync (state) {
      // 触发事件以后，等待1秒再加1
      setTimeout(() => {
        state.count++
      }, 1000)
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
