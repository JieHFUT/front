<script setup>
  // 导入ref/reacyive 函数
  import { ref, reactive, toRef, toRefs, watch, watchEffect } from "vue";
  /**
    数据监听器 (watcnEffect)：当一些响应式数据发生改变的时候，自动触发一些代码
    
   */
  let fulllname = ref("")
  let firstname = ref("")
  let lastname = reactive({
    name:""
  })

  // // 使用 watch 函数监听 ref 响应式数据
  // watch(firstname,(newValue, oldValue)=>{
  //   console.log(`${oldValue} 变为 ${newValue}`)
  //   fulllname.value = newValue + lastname.name
  // })
  // // 使用 watch 函数监听 reactive 响应式数据
  // watch(()=>lastname.name, (newValue, oldValue)=>{
  //   console.log(`${oldValue} 变为 ${newValue}`)
  //   fulllname.value = firstname.value + newValue
  // })


  // 可以直接使用这个代替上面这两个
  watchEffect(()=>{
    fulllname.value = firstname.value + lastname.name
  })

  
</script>

<template>
  <div>
    姓氏：<input type="text" v-model="firstname"> <br>
    名字：<input type="text" v-model="lastname.name"> <br>
    全名：{{ fulllname }}
  </div>
</template>

<style scoped>

</style>
