<template>
  <div>
    <h1>{{ x + y + z }}</h1>
    <h1>当前数值: {{ this.$store.state.sum }}</h1>
    <h1>当前数值放大10倍: {{ this.$store.getters.bigSum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <!--  如果使用mapmutation，就用这个-->
    <!--    <button @click="increment(n)">+</button>-->

    <!--    <button @click="decrement">-</button>-->
    <!--    <button @click="incrementOdd">当前数值为奇数时加</button>-->
    <!--    <button @click="incrementWait">等一等再加</button>-->
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState, mapActions} from 'vuex'

export default {
  name: 'MyCount',
  data() {
    return {
      n: 1,  //用户选择的数值
    }
  },
  computed: {
    // 从this.$store.state取属性，x，y，z等等
    // 方法1
    param1: function () {
      return this.$store.state.x
    },
    // 方法2
    // 借助mapState生成计算属性，从state读数据（对象写法）
    ...mapState({x: 'x', y: 'y', z: 'z'}),
    // 数组写法
    ...mapState(['x', 'y', 'z']),

    // 借助mapGetters生成计算属性，从getters中读数据
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
      this.$store.dispatch('jia', this.n)
      // 也可以直接调用mutation中的方法
      // this.$store.commit('JIA', this.n)
    },
    // map写法
    // ...mapMutations({'increment': 'JIA'})

    // actions
    // ...mapActions({'increment': 'jia'})
  },
  mounted() {
  },
}
</script>
