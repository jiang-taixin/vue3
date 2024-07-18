<template>
  <a-flex vertical>
    <p class="title">Ref & Reactive</p>
    <p>ref用于基本类型，对象  使用.value</p>
    <p>当前数量：{{count}}</p>
    <a-button @click="add">增加</a-button>
    <a-divider />
    <p>reactive 创建对象</p>
    <div class="container">
      <p>姓名：{{userInfo.name}}</p>
      <p>年龄：{{userInfo.age}}</p>
      <p>电话：{{userInfo.tel}}</p>
      <a-button @click="updateName">修改姓名</a-button>
      <a-button @click="updateAge">修改年龄</a-button>
      <a-divider />
      <p>reactive 重新分配一个对象，会失去响应式    所以后端返回的数据对象不能直接赋值给reactive</p>
      <a-button @click="updateUser">修改用户</a-button>
    </div>

    <p>如果需要几个基本类型，必须使用ref</p>
    <p>如果需要响应式对象，层级不深，使用ref reactive都可以</p>
    <p>如果需要响应式对象，且层级较深，推荐使用reactive</p>
    <a-divider />
    <p>toRefs, toRef    let {name, age} = toRefs(userInfo);</p>
  </a-flex>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue'

// 组合式  数据和方法组合在一起    同时相同业务的数据和方法进行组合
const count = ref(0);
console.log('------- ref:'+JSON.stringify(count));
//{"__v_isShallow":false,"__v_isRef":true,"_rawValue":0,"_value":0}
function add(){
  count.value ++;
}

let userInfo = reactive({
  name:'Mike',
  age:30,
  tel:13899999999
})
console.log('------- reactive:'+JSON.stringify(userInfo));
function updateName(){
  userInfo.name = "Jack";
}
function updateAge(){
  userInfo.age ++;
}
function updateUser(){
  // 重新分配对象会失去响应式
  //userInfo = {name:'Tom',age:32,tel:13454545454};

  // 假如服务器返回对象要重新赋值给reactive对象，可以用下面的方法
  Object.assign(userInfo,{name:'Tom',age:32,tel:13454545454});

  let {name, age} = toRefs(userInfo);
  console.log(name, age);
}


</script>

<style scoped lang="scss">

</style>
