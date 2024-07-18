<template>
  <a-flex vertical>
    <p class="title">{{ title }}</p>
    <p>导航区 to的两种写法   字符串   对象</p>
    <p>传参的几种形式 home用query   关于用params    news用props</p>
    <a-flex wrap="wrap" gap="small">
      <RouterLink to="/my-route/home?name=张三" active-class="active">首页</RouterLink>
      <RouterLink :to="{
        name:'my-news',
        params:{
          email:'test123@126.com'
        },
      }" active-class="active">新闻</RouterLink>
      <RouterLink :to="`/my-route/about/${30}`" active-class="active">关于</RouterLink>
<!--      <RouterLink :to="{path:'/about'}" active-class="active">关于</RouterLink>-->
    </a-flex>
    <p>展示区</p>
    <div class="container">
      <RouterView></RouterView>
    </div>
  </a-flex>
</template>

<script lang="ts" setup>

import { reactive, ref } from 'vue'
import  {RouterView, RouterLink} from 'vue-router'



const title = ref('路由和嵌套路由')
const newsList = reactive([
  {id: '0001', title:'new1 001', content:'new1 content'},
  {id: '0001', title:'new1 001', content:'new1 content'},
  {id: '0001', title:'new1 001', content:'new1 content'},
  {id: '0001', title:'new1 001', content:'new1 content'}
])

</script>

<style scoped lang="scss">

.active{
  color: red;
}

</style>
