<template>

  <a-flex vertical>
    <p class="title">{{title}}</p>
    <p>对于任何包含响应式数据的复杂逻辑，你都应该使用【计算属性】
      computed 表示计算属性，通常用于处理数据，简化书写在模板中的复杂逻辑。使用computed可以将数据处理成我们想要的格式，无需在模板中使用复杂冗长的计算表达式。
      computed有两个方法，分别是set()和get()。它可以接受一个带有get和set函数的对象来创建一个可写的 ref 对象
    </p>
    <p>names数据有:{{count}}</p>
    <a-button @click="addName">增加</a-button>
    <p v-for="(item,index) of names" :key="index">{{item}}</p>
    <a-divider />

    <div class="container">
      <a-flex vertical>
        <a-row :span="24" >
          <a-col :span="4" align="center">姓名</a-col>
          <a-col :span="20">
            <a-input v-model:value="userInfo.name"></a-input>
          </a-col>
        </a-row>
        <a-row :span="24" justify="center">
          <a-col :span="4" align="center" >年龄</a-col>
          <a-col :span="20">
            <a-input v-model:value="userInfo.age"></a-input>
          </a-col>
        </a-row>
        <p>用户信息：{{userMsg}}</p>
      </a-flex>
    </div>
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

const stopWatch = watch(count,
  (newValue, oldValue) =>{
    console.log(`变化了, new:${newValue}, old:${oldValue}`)
    if(newValue > 2){
      // 结束watch
      stopWatch();
    }
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

// 尚硅谷示例
const userInfo = ref({
  name:"张三",
  age: 30
})
let userMsg = computed(() => {
  return `${userInfo.value.name} -- ${userInfo.value.age}`
})


</script>

<style scoped lang="scss">

</style>
