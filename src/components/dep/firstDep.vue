<template>
  <p>第二级组件</p>
  <p>app层面provide的数据{{appdata}}</p>
  <SecondDep>
  </SecondDep>
</template>
<script lang="ts" setup>
import SecondDep from './secondDep.vue'
import { inject } from 'vue'
const appdata = inject('appdata')
</script>
<style scoped lang="scss">

</style>
