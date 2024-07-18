<template>
  <a-flex vertical>
    <p class="title">{{title}}</p>
    <p>params传过来的参数 age:{{params.age}}</p>
  </a-flex>
</template>

<script lang="ts" setup>

import { ref, toRefs } from 'vue'
import { useRoute } from 'vue-router'

const title = ref("My-About Page")

const route = useRoute();
const {params} = toRefs(route)

</script>

<style scoped lang="scss">

</style>
