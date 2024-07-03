<template>
  <a-config-provider
    :theme="{
      token: {
        // 修改主体色
        colorPrimary: '#33A1C9',
        borderRadius: '20px'
      },
    }"
  >
    <a-layout>
      <a-layout-header>
        <myHeader />
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="15%">
          <sideBar />
        </a-layout-sider>
        <a-layout-content>
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script setup lang="ts">

import myHeader from '../src/components/myHeader/myHeader.vue'
import sideBar from '../src/components/sideBar/sideBar.vue'

</script>



<style scoped lang="scss">
.ant-layout {
  height: 100%;

  .ant-layout-header {
    height: 60px;
    padding: 0;
  }
  .ant-layout-sider{
    background-color: white;
  }

  .ant-layout {
    flex: 1;

    :deep(> .ant-layout-content) {
      height: calc(100vh - 80px);
      width: auto;
      margin: 10px 10px 10px 10px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      overflow: auto;

      > :nth-child(2) {
        flex: 1;
      }
    }
  }
}
</style>
