<template>
  <div>
    <h3>当前最新的count值为: {{ this.$store.state.count }}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+N</button>
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
    }
  }
}
</script>
