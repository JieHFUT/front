<script >
  // 导入ref/reacyive 函数
  import { ref } from "vue";

  export default{
    setup(){
      /**
       * 响应式数据：在数据变化的时候，vue 框架会将变量的最新值更新到 dom 树中，页面数据就是实时更新的
       * 非响应式数据：在数据变化的时候，vue 框架不会将变量的最新的值更新在 dom 树中，页面数据不是实时最新的
       * 
       * vue2 中数据不做特殊处理，默认是响应式的，vue3 中数据需要经过 ref/reactive 函数处理才是响应式的
       * ref/reacyive 函数是 vue3 提供给我们的方法，导进来就可以使用
       * 但是 ref 处理的响应式数据在操作的时候需要注意，
       * 在 script 标签中操作 ref 的响应式数据需要通过 .value 的形式操作
       * 在 template 标签中操作 ref 的响应式数据不需要通过 .value 的形式操作
       */
      // 定义一些要展示到 HTML 上的数据（数据以变量。函数形式存在）
      let counter = ref(1);
      // 让 counter 自增的方法
      function counterIncr() {
        counter.value++;
      }
      // 让 counter 自减的方法
      function counterDecr() {
        counter.value--;
      }
      // 显示 counter 值的方法
      function showCounter() {
        alert(counter.value);
      }

      return{
        counter,
        counterIncr,
        counterDecr,
        showCounter
      }
    }
  }
</script>

<template>
  <!-- 开发两个小按钮，左边一个加号，右边一个减号，中间一个数字 -->
   <!-- 加号按钮绑定 counterIncr() 方法 -->
   <button @click="counterIncr">+</button>
   <!-- sapn 绑定 counter：v-text="counter"即为某个变量和某个文本绑定 -->
   <!-- vue 框架在渲染执行这些代码的时候，会生成一颗 dom 树，将这些绑定数据的特殊的标记转换成为标记的值 -->
   <span v-text="counter"></span>
   <!-- 加号按钮绑定 counterDecr() 方法 -->
   <button @click="counterDecr">-</button>
   <button @click="showCounter"></button>
</template>

<style scoped>

</style>
