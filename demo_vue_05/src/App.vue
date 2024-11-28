<script setup>
//
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
let myPath = ref("")


  function showList(){
    // 编程式路由跳转
    router.push("/list")
    // 或者
    router.push({path:"/list"})
  }

  function goThePage(){
    router.push(myPath.value)
  }
</script>

<template>
  <div>
    app 原有的开头 <hr>
    <!-- 声明式路由 -->
    <router-link to="/home">home page</router-link> <hr>
    <router-link to="/add">add page</router-link> <hr>
    <router-link to="/list">list page</router-link> <hr>
    <router-link to="/update">update page</router-link> <hr><hr>
    <!-- 该标签会会被替换成为具体的 .vue -->
     <router-view></router-view> <hr>

    <!-- 编程式路由 -->
     <button @click="showList()">list</button>
     <button @click="goThePage()">go</button><input type="text" v-model="myPath">


    app 原有的结尾
  </div>
</template>

<style scoped>

</style>
