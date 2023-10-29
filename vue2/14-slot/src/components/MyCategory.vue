<template>
  <div class="category">
    <h3>分类xxxx</h3>
    <slot name="content">我是默认值</slot>
    <slot name="content2">我是默认值</slot>
    <slot :listData="lists1">我是默认值</slot>
  </div>
</template>

<script>
export default {
  name: 'MyCategory',
  data() {
    return {
      lists1: ["a","b"]
    }
  }
}
</script>

<style scoped>
.category {
  background-color: aqua;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>