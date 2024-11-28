<script setup>
  // 导入ref/reacyive 函数
  import { ref, reactive, toRef, toRefs } from "vue";
  /**
    响应式事件基础
    让一个普通数据转换成为一个响应式数据：
    1.ref函数       更适合单个对象
    2.reactive函数  更适合对象

    响应式数据：在数据变化的时候，vue 框架会将变量的最新值更新到 dom 树中，页面数据就是实时更新的
    非响应式数据：在数据变化的时候，vue 框架不会将变量的最新的值更新在 dom 树中，页面数据不是实时最新的
    
    vue2 中数据不做特殊处理，默认是响应式的，vue3 中数据需要经过 ref/reactive 函数处理才是响应式的
    ref/reactive 函数是 vue3 提供给我们的方法，导进来就可以使用
    但是 ref 处理的响应式数据在操作的时候需要注意，
    在 script 标签中操作 ref 的响应式数据需要通过 .value 的形式操作
    在 template 标签中操作 ref 的响应式数据不需要通过 .value 的形式操作
    在  script 标签中 && template 标签中操作 reactive 的响应式数据都直接通过 .value 的形式操作

   */

  let counter = ref(10);
  function incr() {
    counter.value++;
  }

  let person = reactive ({
    name:"",
    age:10
  })

  let page = toRef(person,'age')
  function incrToRef() {
    page.age++;
  }
  let {name, age} = toRefs(person)
  function inceToRefs() {
    age.value++;
  }
  

  function incrAge() {
    person.age++;
  }
  // toRef 函数：将 reactive 响应式数据中的某个属性转换成为 ref 响应式数据
  // toRefs 函数：将 reactive 响应式数据中的多个属性转换成为 ref 响应式数据
  
  
  
</script>

<template>
  <div>
    <button @click="incr()">+</button>
    <button @click="counter++">+</button>
    {{ counter }}
    <hr>

    <button @click="incrAge()">+</button>
    {{ person.age }}

  </div>
</template>

<style scoped>

</style>
