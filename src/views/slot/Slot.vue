<template>
  <a-flex vertical>
    <p class="title">{{title}}</p>
    <a-divider />
    <p>具名插槽 v-slot:second 简写#first</p>
    <my-slot >
      <p>父元素插入内容</p>

      <template #first>
        <p>First 插槽</p>
      </template>
      <template v-slot:second>
        <p>Second 插槽</p>
      </template>
      <template #third>
        <p>Third 插槽</p>
      </template>

      <template #four="slotProps">
        <div style="height: 100px; width: 100px; background-color: cadetblue; color: red">
          {{faMessage}}-{{slotProps.msg}}
        </div>
      </template>
    </my-slot>
    <a-divider />



  </a-flex>
</template>

<script lang="ts" setup>

import MySlot from '../../components/mySlot/mySlot.vue'

import { ref } from 'vue'

const title = ref('Slot');
const faMessage = ref('父元素数据');

</script>

<style scoped lang="scss">

</style>
