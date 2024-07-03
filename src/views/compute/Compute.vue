<template>

  <a-flex vertical>
    <p class="title">{{title}}</p>
    <p>对于任何包含响应式数据的复杂逻辑，你都应该使用【计算属性】
      computed 表示计算属性，通常用于处理数据，简化书写在模板中的复杂逻辑。使用computed可以将数据处理成我们想要的格式，无需在模板中使用复杂冗长的计算表达式。
      computed有两个方法，分别是set()和get()。它可以接受一个带有get和set函数的对象来创建一个可写的 ref 对象
    </p>
    <p>names数据有:{{count}}</p>
    <a-button @click="addName">增加</a-button>
    <p v-for="item of names">{{item}}</p>
    <a-divider />


  </a-flex>

</template>

<script lang="ts" setup>

import { computed, ref, watch } from 'vue'
import get from 'ant-design-vue/es/vc-util/get'

const title = ref('计算属性');
const names = ref([]);

const count = computed(() => {
  console.log('---computed 执行了');
  return names.value.length
})

watch(
  () => count.value,
  (newValue, oldValue) =>{
    console.log(`变化了, new:${newValue}, old:${oldValue}`)
  }
)

const count1 = computed({
  get:()=>{

  },
  set:(val) => {

  }
})

function addName(){
  names.value.push(`name ${names.value.length}`)
}


</script>

<style scoped lang="scss">

</style>
