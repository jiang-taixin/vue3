<template>

  <a-flex vertical>
    <p class="title">{{title}}</p>
    <p>通过v-on进行绑定，简写成@，如@click</p>
    <p>count:{{count}}</p>
    <a-button @click="addHandler">增加</a-button>
    <a-divider />
    <p class="title">事件传参</p>
    <a-button @click="sendArg">传event</a-button>
    <p>fun(e) 传递事件</p>
    <a-button @click="sendArgument('hello', $event)">传参数</a-button>
    <p>fun(arg, $event) 传递参数和事件</p>
    <a-divider />
    <p class="title">事件修饰符</p>
    <p>阻止默认事件，阻止事件冒泡等 .stop .prevent .once .enter ....    在函数里用e.preventDefault@click.prevent等</p>
    <a @click.prevent="clickLink" href="https://www.baidu.com">百度</a>
    <div @click="clickDiv">
      <a-button @click="click">阻止冒泡</a-button>
    </div>


  </a-flex>

</template>

<script lang="ts" setup>

import { ref } from 'vue';

const title = ref('事件');
const count = ref(0);


function addHandler(){
  count.value ++;
}

function sendArg(e:MouseEvent){
  console.log(e);
}
function sendArgument(e:any, event){
  console.log(e, event);
}

function clickLink(e){
  // 阻止默认事件
  //e.preventDefault();
  console.log("-------点击了link");
}

function clickDiv(e){
  // 阻止默认事件
  //e.preventDefault();
  console.log("-------点击了DIV");
}

function click(e){
  // 阻止默认事件
  //e.preventDefault();
  console.log("-------点击了BUTTON");
  e.stopPropagation();
}


</script>

<style scoped lang="scss">

</style>
