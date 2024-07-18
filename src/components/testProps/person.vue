<template>
  <a-flex vertical>
    <p>父组件传递过来的数据a:{{}}</p>
    <a-divider />
    <ul>
      <li v-for="item in list" :key="item.id">id:{{item.id}}--name:{{item.name}}--age:{{item.age}}</li>
    </ul>
  </a-flex>
</template>

<script lang="ts" setup>
import type { Persons } from '@/schema'
import LifeCircle from '@/views/lifeCircle/LifeCircle.vue'
//可以这样接收 参数必须是单引号  同时保存起来
//defineProps(['a'])

//只接收
//let props = defineProps(['a','list'])

// 接收list+限制类型
defineProps<{list:Persons}>()


</script>


<style scoped lang="scss">

</style>
