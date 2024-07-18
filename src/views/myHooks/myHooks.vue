<template>

  <a-flex vertical>
    <p class="title">{{title}}</p>
    <a-flex>
      <img style="height: 100px; width: fit-content; margin-right: 10px" v-for="item in imageList" :src="item" />
    </a-flex>
    <p>一共{{imageList.length}}只狗</p>
    <a-button @click="getDog">添加一只狗</a-button>
    <a-divider />
    <p style="color: red">把某个模块相关的数据和方法定义成一个hook  命名规范useDog</p>
    <p style="color: red">在src下创建hooks文件夹  在其中创建useDog.ts
      将模块相关的数据和方法全部copy到该文件并用 export default function ()包裹
      并向外部提供东西
    </p>
  </a-flex>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import useDog from '@/hooks/useDog'

const title = ref('自定义Hooks');

//使用hooks    解构
const {imageList, getDog} = useDog()

</script>

<style scoped lang="scss">

</style>
