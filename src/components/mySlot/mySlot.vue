<template>
  <!--默认内容    父元素没有使用该插槽   默认显示的内容-->
  <slot>
    <a-button >插槽默认内容</a-button>
  </slot>
  <slot name="second">
  </slot>
  <slot name="first">
  </slot>

  <a-flex :vertical="false">
    <div
      v-for="(item, index) in new Array(4)"
      :key="item"
      :style="{ background: `${index % 2 ? '#1677ff' : '#1677ffbf'}`,width:'200px', height:'50px' }"
    >
      <slot name="third">
      </slot>
    </div>
  </a-flex>

  <a-divider />
  <p>传递数据</p>
  <slot :msg="message" name="four">

  </slot>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const message = ref("子元素数据");

</script>

<style scoped lang="scss">

</style>
