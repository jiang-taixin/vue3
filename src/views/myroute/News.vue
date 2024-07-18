<template>
  <a-flex vertical>
    <p class="title">{{title}}</p>
    <a-flex>
      <div style="background-color: cadetblue; width: 30%; height: 300px">

      </div>
      <div style="background-color: #feffe6; width: 70%; height: 300px">

      </div>
    </a-flex>
  </a-flex>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

const title = ref("My-News Page")

</script>

<style scoped lang="scss">

</style>
