import {ref} from 'vue';
import axios from 'axios'

export default function (){
  const url = 'https://dog.ceo/api/breed/pembroke/images/random';
  const imageList = ref([]);


  async function getDog(){
    try {
      let message = await axios.get(url);
      imageList.value.push(message.data.message);
    }
    catch (error){
      alert(error);
    }
  }

  // 向外部提供东西  可以是数组或者对象    这里用对象的简写形式
  return {imageList, getDog}
}
