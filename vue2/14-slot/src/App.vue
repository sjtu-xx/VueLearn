<template>
  <div class="container">
    <MyCategory>
      <!-- 作用域插槽：数据在组件自身，但根据数据生成的结构需要组件的使用者决定 -->
      <!--  这里的datas名称是自己定义的 -->
      <!--  使用slot-scope或scope  -->
      <template v-slot="datas">
        <ul>
          <li v-for="(item,_) in datas.listData" :key="_">{{ item }}</li>
        </ul>
      </template>
<!--      <template slot-scope="datas">-->
<!--        <ul>-->
<!--          <li v-for="(item,_) in datas.listData" :key="_">{{ item }}</li>-->
<!--        </ul>-->
<!--      </template>-->
  <!--        es6中的解构赋值   -->
  <!--      <template scope="{listData}">-->
    </MyCategory>
    <!-- 具名插槽 -->
    <MyCategory>
      <p slot="content">我不是默认值</p>
    </MyCategory>
    <MyCategory>
      <template slot="content">
        <p>我不是默认值</p>
        <p>我不是默认值</p>
      </template>
    </MyCategory>
    <MyCategory>
      <template v-slot:content>
        <p>我不是默认值</p>
        <p>我不是默认值</p>
      </template>
    </MyCategory>
    <MyCategory>
      <template #content>
        <p>我不是默认值</p>
        <p>我不是默认值</p>
      </template>
    </MyCategory>

  </div>
</template>

<script>

import MyCategory from "@/components/MyCategory.vue";

export default {
  name: 'App',
  components: {
    MyCategory
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;


}
</style>
