<template>
  <div>
    <h3>当前最新的count值为:{{ count }}</h3>
    <button @click='btnHandler3'>-1</button>
    <button @click='btnHandler4'>-N</button>
    <button @click='btnHandler5'>-1 async</button>
    <button @click='btnHandler6'>-N async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    // 将全局mutation方法映射为当前组件的方法method
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    btnHandler3 () {
      this.sub()
    },
    btnHandler4  () {
      this.subN(3)
    },
    btnHandler5 () {
      this.subAsync()
    },
    btnHandler6 () {
      this.subNAsync(3)
    }
  }
}
</script>
