import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state() {
    const userInfo = {};
    return JSON.parse(localStorage.getItem('userInfo') as string) || [];
  },
  // 创建actions   里面放置函数
  actions: {
    changeUserInfo(userId, userName, age) {
      console.log('----- change user info id:'+userId+', user name:'+userName+', age:'+age);
      //修改数据
      this.userId = userId;
      this.userName = userName;
      this.age = age;
    }
  },
  getters:{
    // 对现有数据进行加工
    after5YearsAge(state){
      return this.age + 5
      // 也可以这样写
      // return state.age + 5
    },
    // 或者下面的写法
    // after5YearsAge:state => state.age+5
  }
})
