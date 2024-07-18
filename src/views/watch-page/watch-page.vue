<template>
    <a-flex vertical>
      <p class="title">{{title}}</p>
      <p>作用：监视数据的变化,只能监视以下四种数据</p>
      <ul>
        <li>ref定义的数据</li>
        <li>reactive定义的数据</li>
        <li>函数返回一个值</li>
        <li>包含上述内容的数组</li>
      </ul>

      <p style="color: red">情况一    ref定义的基本数据类型</p>
      <p>count：{{count}}</p>
      <a-button @click="add">add</a-button>
      <a-divider />
      <p style="color: red">情况二    ref定义的对象数据类型   监视的是对象地址值  若想监视对象属性变化需要手动开启深度监视  {deep:true}</p>
      <p>只改变属性时  newvlue和oldvalue相同  因为是去相同地址拿的数据  </p>
      <p>person-- name:{{person.name}} | age:{{person.age}}</p>
      <a-button @click="changeName">修改姓名</a-button>
      <a-button @click="changeAge">修改年龄</a-button>
      <a-button @click="changePerson">修改用户</a-button>
      <a-divider />
      <p style="color: red">情况三    reactive定义的对象数据类型 默认是开启深度监视的且不能关闭</p>
      <p>car-- brand:{{car.brand}} | price:{{car.price}}</p>
      <a-button @click="changeBrand">修改品牌</a-button>
      <a-button @click="changePrice">修改价格</a-button>
      <a-button @click="changeCar">修改汽车</a-button>
      <a-divider />
      <p style="color: red">情况四    监视ref或reactive定义的对象数据的某个属性</p>
      <p>不能监听  object.key 这里要监听一个getter函数 watch(() => {return car.brand}, (newVal, oldVal) => {
        })</p>
      <p>总结：全部监听函数，假如是对象类型，监听的是地址值，再加个deep</p>

      <a-divider />
      <p style="color: red">情况五 监视上述多个数据的数组</p>

      <a-divider />
      <p style="color: red">watchEffect</p>
    </a-flex>
</template>

<script lang="ts" setup>
import { reactive, ref, watch, watchEffect } from 'vue'
const title = ref('Watch');

//监视ref定义的基本类型数据
const count = ref(0);
function add(){
  count.value ++;
}

// 监视对象，监视回调    watch解除监视： watch方法有一个返回值  这个值是一个函数 WatchStopHandle
const stopWatchCount = watch(count, (newVal, oldVal)=>{
  console.log(`count发生了变化，newValue：${newVal}, oldValue:${oldVal}`);
  if(newVal > 3){
    //停止监测
    stopWatchCount();
  }
})

// 监视ref定义的对象
const person = ref({
  name:'张三',
  age:30
})

function changeName(){
  person.value.name += '~';
}

function changeAge(){
  person.value.age++;
}
function changePerson(){
  person.value = {name:'李四',age:80}
}

//监视的是对象地址值  若想监视对象属性变化需要手动开启深度监视  {deep:true}
watch(person, (newVal, oldVal)=>{

  console.log(`person发生了变化, newValue:${JSON.stringify(newVal)} , oldValue:${JSON.stringify(oldVal)}`);
  //{"name":"张三~~~","age":30} , oldValue:{"name":"张三~~~","age":30}
}, {deep:true, immediate:true})

// 监视reactive
const car = reactive({
  brand:"奔驰",
  price:50
})

function changeBrand(){
  car.brand += "~";
}
function changePrice(){
  car.price += 1;
}
function changeCar(){
  Object.assign(car, {brand:"宝马", price:30});
}

watch(car, (newVal, oldVal) => {
  console.log(`car发生了变化, newValue:${JSON.stringify(newVal)} , oldValue:${JSON.stringify(oldVal)}`);
})

// 监视ref 或reactive定义的对象的某个属性, 且该属性是基本类型时    要写成函数式    属性是对象时，也用函数式，然后加上深度监听
watch(() => car.brand, (newVal, oldVal) => {
  console.log(`car brand发生了变化, newValue:${JSON.stringify(newVal)} , oldValue:${JSON.stringify(oldVal)}`);
})
// 监视多个数据
watch([() => car.brand, () => person.value.name], (newVal, oldVal) => {

})

watchEffect(()=>{
  if(count.value > 2){
    console.log("--------- watch effect");
  }

})


</script>

<style lang="scss">
</style>
