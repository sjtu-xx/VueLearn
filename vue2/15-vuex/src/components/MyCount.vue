<template>
  <div>
    <h1>当前数值: {{this.$store.state.sum}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
<!--    <button @click="decrement">-</button>-->
<!--    <button @click="incrementOdd">当前数值为奇数时加</button>-->
<!--    <button @click="incrementWait">等一等再加</button>-->
  </div>
</template>

<script>
export default {
  name: 'MyCount',
  data() {
    return {
      n: 1,  //用户选择的数值
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('jia', this.n)
    }
  },
  mounted() {
    console.log('Count', this)
  },
}
</script>
