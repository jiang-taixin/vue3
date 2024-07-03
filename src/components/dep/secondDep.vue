<template>
  <p>第三级组件</p>
  <p>name:{{data.name}}</p>
  <p>age:{{data.age}}</p>
  <p>email:{{data.email}}</p>
</template>
<script lang="ts" setup>

import { inject } from 'vue'

const data = inject('data');

</script>
<style scoped lang="scss">

</style>
