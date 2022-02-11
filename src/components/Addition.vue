<template>
  <div>
    <h3>当前最新的count值为: {{ this.$store.state.count }}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+N</button>
    <button @click="btnHandlerM">+1 mutation async</button>
    <button @click="btnHandler3">+1 action async</button>
    <button @click="btnHandler4">+N action async</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    btnHandler1 () {
      // 通过commit提交要执行的函数，未携带参数
      this.$store.commit('add')
    },
    btnHandler2 () {
      // commit的作用就是触发一个mutation(变化全局共享数据)
      this.$store.commit('addN', 3)
    },
    btnHandlerM () {
      this.$store.commit('addMutationAsync')
    },
    btnHandler3 () {
      // 调用action方法不带参数
      this.$store.dispatch('addAsync')
    },
    btnHandler4 () {
      // 调用action方法带自定义参数
      this.$store.dispatch('addNAsync', 3)
    }
  }
}
</script>
