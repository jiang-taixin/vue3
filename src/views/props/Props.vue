<template>

  <a-flex vertical>
    <p class="title">{{title}}</p>
    <testProps :name="subtitle"  :notify-func="test" @test="test"/>
    <p>还可以向子组件传递一个参数，子组件调用并回传数据</p>
    <a-divider />


  </a-flex>

</template>

<script lang="ts" setup>

import {  ref } from 'vue'
import testProps from '../../components/testProps/testProps.vue'

const title = ref('Props');
const subtitle = ref('子组件测试');

function test(data: String){
  console.log('test function:'+data);
}




</script>

<style scoped lang="scss">

</style>
