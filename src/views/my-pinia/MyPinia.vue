<template>
  <a-flex vertical>
    <p class="title">{{title}}</p>
    <p>安装pinia npm install pinia</p>
    <p>mian.ts 配置 import { createPinia } from 'pinia'  app.use(createPinia())</p>
    <div class="container">
      <p>总数: {{countStore.sum}}</p>
      <a-flex>
        <a-select v-model.number:value="number" :options="options" @change="handleChange"/>
        <a-button @click="add">加</a-button>
        <a-button @click="reduce">减</a-button>
      </a-flex>
    </div>
    <a-divider />
    <p>在src下创建stores文件夹  创建count.ts文件名最好和vue文件名一致 ts文件中方法用hooks命名规则，defineStore的id最好和vue文件名一致</p>
    <p>user id:{{userStore.userId}}</p>
    <p>user name:{{userStore.userName}}</p>
    <p>user age:{{userStore.age}}-- 五年后年龄:{{userStore.after5YearsAge}}</p>
    <a-button @click="changeUser">修改信息</a-button>
    <a-button @click="actionChange">action修改信息</a-button>
    <a-divider />
    <p style="color: red">修改数据</p>
    <p>第一种，直接修改 countStore.sum += number.value</p>
    <p>第二种，批量修改 userStore.$patch({
      userName:'李四',
      userId:'301',
      age:36
      })</p>
    <p>第三种，借助actions  1.在store里面创建actions 2.actions 函数中this.userId = userId;</p>
    <p style="color: red">actions存在的意义是增加逻辑判断并可以复用</p>
    <p style="color: red">storeToRefs 解构的话需要使用 const {userId, userName, age} = storeToRefs(userStore);</p>

    <a-divider />
    <p style="color: red">$subscribe</p>

  </a-flex>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { useCountStore } from '@/stores/count'
import { useUserStore} from '@/stores/user'

const countStore = useCountStore();
const userStore = useUserStore();
userStore.$subscribe((mutation, state) => {
  console.log("----- user 发生了变化");
  // 存到localstorage
  localStorage.setItem('userInfo',JSON.stringify(state));
})

console.log("count store:"+countStore.sum);

const title = ref('pinia状态管理');
const number = ref(0);
const options = [{value:1, label:1},{value:2, label:2},{value:3, label:3}];


function add(){
  //console.log('add -- sum:'+sum.value+' , number:'+number.value);
  //sum.value += number.value;
  countStore.sum += number.value
}
function reduce(){
  //console.log('reduce -- sum:'+sum.value+' , number:'+number.value);
  //sum.value -= number.value;
  countStore.sum -= number.value
}

function changeUser(){
  userStore.$patch({
    userName:'李四',
    userId:'301',
    age:36
  })
}

function actionChange(){
  userStore.changeUserInfo('111', '王五', 18);
}


const handleChange = (value: number) => {
  console.log(`selected ${value}`);
  number.value = value;
};

</script>

<style scoped lang="scss">

</style>
