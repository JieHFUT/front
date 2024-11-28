<script setup>
  // 导入ref/reacyive 函数
  import { ref, reactive, toRef, toRefs } from "vue";
  /**
    条件渲染(满足某些条件(if)，某些元素进入 DOM 树)

    v-if="表达式/数据"  数据为true，则当前元素会渲染进入 dom 树，数据为false，当前元素不在 dom 树中
    v-else 自动和前一个 v-if 做相反操作
    v-show="" 数据为 true，数据展示在页面上，否则不展示(但是该元素一直在 dom 树中，是通过 css 样式隐藏)

   */

   let flag = ref(true);
   

  
  
</script>

<template>
  <div>
    <h1 id="ha" v-if="flag">v-if</h1>
    <h1 id="hb" v-else="">v-else</h1>
    <h1 id="hc" v-show="flag">v-show</h1>
    <!-- 通过一个按钮将其更改为 false -->
     <button @click="flag=!flag">toggle</button>
  </div>
</template>

<style scoped>

</style>
