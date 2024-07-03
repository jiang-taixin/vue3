<template>
  <a-flex vertical>
    <p class="title">{{title}}</p>
    <a-divider />
    <p>{{count}}</p>
    <a-button @click="add">add</a-button>
  </a-flex>
</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'

const title = ref('生命周期');
const count = ref(0);

onBeforeMount(() => {
  console.log("onBeforeMount");
})

onMounted(() => {
  console.log("onMounted");
})

onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
})

onUpdated(() => {
  console.log("onUpdated");
})

onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
})

onUnmounted(() => {
  console.log("onUnmounted");
})

function add(){
  count.value ++;
  title.value = '';
}

</script>

<style scoped lang="scss">

</style>
