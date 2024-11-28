<script setup>

</script>

<template>
  <div>
    app 原有的开头 <hr>
    <router-link to="/home">home page</router-link> <hr>
    <router-link to="/add">add page</router-link> <hr>
    <router-link to="/list">list page</router-link> <hr>
    <router-link to="/update">update page</router-link> <hr><hr>
    <!-- 该标签会会被替换成为具体的 .vue -->
     <router-view></router-view> <hr>
    app 原有的结尾



    <!-- 
        一个视图上是可以同时存在多个 router-view 的
        每个 router-view 都可以设置专门的用于展示哪个组件的方法
    -->
    <router-view name="homeView"></router-view> <hr>
    <router-view name=""></router-view> <hr>
    <router-view></router-view> <hr>
    <router-view></router-view> <hr>
    <router-view></router-view> <hr>
  </div>
</template>

<style scoped>

</style>
