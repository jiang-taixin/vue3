<template>

  <a-flex vertical>
    <p class="title">{{title}}</p>
    <p>通过{{}}进行绑定，内容可为单一表达式</p>
    <a-divider />
    <p class="title">属性绑定</p>
    <a-button @click="setActive">切换状态</a-button>
    <p>使用v-bind,如v-bind:class,简写成:class</p>
    <p :class="active?'active':'not-active'">测试属性绑定</p>
    <a-divider />
    <p class="title">条件渲染</p>
    <p v-if="active">条件为真时显示</p>
    <a-divider />
    <p class="title">列表渲染</p>
    <p v-for="(item, index) of list" :key="index">{{item}}</p>
  </a-flex>

</template>

<script lang="ts" setup>

import { ref } from 'vue';

const title = ref('模版语法');
const active = ref(true);
const list = ref([]);

function setActive(){
  active.value = !active.value;
  list.value.push("name");
}

</script>

<style scoped lang="scss">

.active{
  color:red;
}
.not-active{
  color: #2c3e50;
}

</style>
