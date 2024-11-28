<script setup>
  // 导入ref/reacyive 函数
  import { ref, reactive, toRef, toRefs, computed } from "vue";
  /**
    计算属性
   */

   const author = reactive({
    name:"zhangsan",
    books:["java", "c++", "python"],

   })
   // 通过方法返回数据，每使用一次 执行一次
   function hasBooks() {
    console.log("hasBooks")
    return author.books.length > 0 ? "yes":"no"
   }

   // bookMessage 是一个属性，通过计算方法返回数据，如果每次使用的时候和上次使用的时候数据没有变化，则直接使用上一次的结果
   let bookMessage = computed(() => {
    console.log("bookMessage")
    return author.books.length > 0 ? "yes":"no"
   })
  
</script>

<template>
  <div>
    <p>作者：{{ author.name }}</p>
    是否出版过图书：{{ hasBooks() }}
    是否出版过图书：{{ bookMessage }}
    

  </div>
</template>

<style scoped>

</style>
