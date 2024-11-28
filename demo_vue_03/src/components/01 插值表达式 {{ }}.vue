<script setup>
  /**
   插值表达式，绑定页面上元素和变量
    
   */
  // 定义一些常见的数据，将数据绑定到下面的元素上
  let msg = "hello vue3";
  let getMsg = ()=>{
    return "hello vue3 message"
  }
  let age = 10;
  let bee = "蜜 蜂";
  let carts = [{name:"可乐", price:3, number:10},{name:"薯片", price:6, number:8}];
  // 获得商品总金额的方法
  function compute(){
    let count = 0;
    for(let index in carts) {
      count += carts[index].price * carts[index].number;
    }
    return count;
  }





</script>

<template>
  <div>
    <!-- 将数据绑定到下面的元素上 -->
    <h1>{{msg}}</h1>
    <!-- 插值表达式中可以调用函数，将函数的返回值渲染到指定地位置 -->
    msg 的值为：{{getMsg()}} <br>
    <!-- 插值表达式支持一些常见的运算符 -->
    年龄：{{ msg }}，是否成年：{{ age > 18 ? 'yes' : 'no' }}<br>
    <!-- 插值表达式中支持对象调用一些 api -->
    {{ bee.split(" ").reverse().join('') }}<br>
    <!-- 显示购物车金额 -->
    购物车总金额：{{ carts[0].price * carts[0].number + carts[1].price * carts[1].number }}<br>
    购物车总金额：{{ compute() }}

  </div>
</template>

<style scoped>

</style>
