<script setup>
  // 导入ref/reacyive 函数
  import { ref } from "vue";
  /**
    事件渲染命令：v-on
    v-on:事件名称="函数名()"
    v-on:事件名可以简写为 @事件名
    js 中原生的事件名称是：on*** 如：onclick ondbclick onblur onfocuse
    vue 中的事件名称是：click dbclick blur focuse

   */

  function fun1() {
    alert("hello function")
  }

  let counter = ref(1)
  function fun2() {
    counter.value++
  }

  function fun3() {
    let flag = confirm("turn to baidu.com，yes?")
    if(!flag){
      // 阻止默认行为(原生 js 编码行为阻止默认行为)
      event.preventDefault()
    }
  }
  
  
</script>

<template>
  <div>
    <!-- 事件的绑定函数 -->
    <button v-on:click="fun1()">hello</button>
    <!-- 内联事件处理 -->
    <button v-on:click="fun2()">+</button>
    <button v-on:click="counter++">+</button>
    {{ counter }}
    <!-- 事件的修饰符 .once 只会绑定一次 -->
    <button v-on:click.once="fun1">hello</button>&nbsp;
    <!-- 事件的修饰符 .prevent 会阻止组件的默认行为（探窗但是不跳转） -->
    <a herf="https://www.baidu.com" v-on:click.prevent="fun3()">百度一下</a>
    

  </div>
</template>

<style scoped>

</style>
