<template>

  <a-flex vertical>
    <p class="title">{{title}}</p>
    <testProps :name="subtitle"  :notify-func="test" @test="test"/>
    <p>还可以向子组件传递一个参数，子组件调用并回传数据</p>
    <a-divider />

    <div class="container">
      <p style="color: red">父组件向子组件传递数据</p>
      <person a="haha" :list="personList"></person>
    </div>
  </a-flex>

</template>

<script lang="ts" setup>

import { reactive, ref } from 'vue'
import testProps from '../../components/testProps/testProps.vue'
import person from '../../components/testProps/person.vue'

import type { PersonInter, Persons } from '@/schema'

const title = ref('Props');
const subtitle = ref('子组件测试');

function test(data: String){
  console.log('test function:'+data);
}

// 传泛型进去  let personList:Persons = reactive   报错is not assignable to type Persons
// 这样使用reactive<Persons>
let personList = reactive<Persons>([
  {id:'user01', name:'张三', age:30},
  {id:'user02', name:'李四', age:20},
  {id:'user03', name:'王五', age:10},
]);




</script>

<style scoped lang="scss">

</style>
