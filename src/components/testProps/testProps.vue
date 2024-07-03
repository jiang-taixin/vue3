<template>
  <p>子组件name:{{props.name}}</p>
  <p>age:{{props.age}}</p>
  <a-divider />
  <p>另外一种子组件调用父组件函数并传值的方法是$emit  父组件中 定义方法@test="test" 子组件中defineEmits</p>

  <a-button @click="click">子组件触发父组件函数并回传信息</a-button>

</template>

<script lang="ts" setup>

const props = defineProps({
  name:{
    type: String,
    required: true,
  },
  age:{
    // 加默认值     如果父组件不传则使用默认值
    type:Number,
    default: 50
  },
  notifyFunc:{
    type:Function
  }
})

const emit = defineEmits([
  'test'
])

// defineEmits 通过泛型参数来定义，可以实现更细粒度的校验
// const emit = defineEmits<{
//   (e: 'changeMoney', money: number): void
//   (e: 'changeCar', car: string): void
// }>()


// 子组件调用父组件传递的参数并回传数据
props.notifyFunc('callback data');

function click(){
  emit("test", "hello");
}

</script>

<style scoped lang="scss">

</style>
