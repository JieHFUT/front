<script setup>
  /**
    属性渲染命令：Attribute
    v-bind  将属性名绑定到元素的属性上
    v-bind:属性名="数据名"
    "v-bind" 可以省略

   */
  
  let imgUrl = "https://img0.baidu.com/it/u=3605778615,2414146348&fm=253&fmt=auto&app=138&f=PNG?w=500&h=780";
  const data = {
    picture:"https://img0.baidu.com/it/u=3605778615,2414146348&fm=253&fmt=auto&app=138&f=PNG?w=500&h=780",
    name:"luffy",
    url:"https://img0.baidu.com"
  }
  
</script>

<template>
  <div>
    <img v-bind:src="imgUrl">
    <img v-bind:src="data.picture" v-bind:title="data.name">
    
    <a v-bind:href="data.url">
      <img v-bind:src="data.picture" v-bind:title="data.name">
    </a>
    

  </div>
</template>

<style scoped>

</style>
