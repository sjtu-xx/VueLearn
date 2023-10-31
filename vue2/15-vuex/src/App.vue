<template>
  <div class="container">
    <MyCount/>
  </div>
</template>

<script>

import MyCount from "@/components/MyCount.vue";

export default {
  name: 'App',
  components: {MyCount}
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
