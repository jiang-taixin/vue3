<template>
  <a-flex vertical>
    <p class="title">{{title}}</p>
    <p>query传过来的参数 name:{{name}}</p>

  </a-flex>
</template>

<script lang="ts" setup>

import { ref, toRefs } from 'vue'
import {useRoute} from 'vue-router'

const title = ref("My-Home Page")
const route = useRoute()
const { name } = toRefs(route.query)


</script>

<style scoped lang="scss">

</style>
