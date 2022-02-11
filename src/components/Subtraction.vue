<template>
  <div>
    <h3>当前最新的count值为:{{ count }}</h3>
    <button @click='btnHandler3'>-1</button>
    <button @click='btnHandler4'>-N</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

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
    btnHandler3 () {
      this.sub()
    },
    btnHandler4  () {
      this.subN(3)
    }
  }
}
</script>
