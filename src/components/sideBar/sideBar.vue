<template>
  <div>
    <a-menu
      style="height: 100%"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :items="items"
      @click="clickItem"

    />
  </div>
</template>

<script lang="ts" setup>

import { h, ref } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import { useRoute, useRouter } from 'vue-router'
import type { MenuProps } from 'ant-design-vue'
const router = useRouter();
const route = useRoute();

const selectedKeys = ref(['/']);
const openKeys = ref(['sub1']);
const items = ref([
  {
    key: '/',
    icon: () => h(MailOutlined),
    label: '模版语法',
    title: '模版语法',
  },
  {
    key: '/event',
    icon: () => h(CalendarOutlined),
    label: '事件',
    title: '事件',
  },
  {
    key: '/compute',
    icon: () => h(AppstoreOutlined),
    label: '计算属性',
    title: '计算属性',
  },
  {
    key: '/props',
    icon: () => h(SettingOutlined),
    label: 'Props',
    title: 'Props',
  },
  {
    key: '/slot',
    icon: () => h(SettingOutlined),
    label: 'Slot',
    title: 'Slot',
  },
  {
    key: '/life',
    icon: () => h(SettingOutlined),
    label: '生命周期',
    title: '生命周期',
  },
  {
    key: '/depdence',
    icon: () => h(SettingOutlined),
    label: '依赖注入',
    title: '依赖注入',
  },
]);

const clickItem:MenuProps['onClick'] = (e:any) =>{
  //console.log(`------ click item:${JSON.stringify(e)}`)
  //console.log(`------ click item:${e.keyPath}`)
  router.push(e.key);
}


</script>

<style scoped lang="scss">

</style>
