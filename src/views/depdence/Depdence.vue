<template>
  <a-flex vertical>
    <p class="title">{{title}}</p>
    <a-divider />
    <FirstDep>
    </FirstDep>
    <a-divider />
    <p>修改数据,修改可以影响整个依赖链，只能由上到下传递，不能反向传递    还可以在app层面使用app.provide('appdata','appdata')</p>
    <a-button @click="update">修改数据</a-button>
  </a-flex>
</template>

<script lang="ts" setup>
import { provide, reactive, ref } from 'vue'
import FirstDep from '../../components/dep/firstDep.vue'

const title = ref('依赖注入');
const data = reactive({
  name:'张三',
  age:30,
  email:"zhangsan@126.com"
})
provide("data",data);


function update(){
  data.name = '李四';
}

</script>

<style scoped lang="scss">

</style>
