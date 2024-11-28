<script setup>
  // 导入ref/reacyive 函数
  import { ref, reactive, toRef, toRefs } from "vue";
  /**
    列表渲染（v-for  针对数组等处理）
    

   */
  let items = reactive([
    {
      id:"item1",
      message:"可乐"
    },
    {
      id:"item2",
      message:"炸鸡"
    },
    {
      id:"item3",
      message:"薯片"
    }
  ])
   

  // 创建一个数组，将其以表格的形式展现在页面上
  let carts = reactive([
    {
      name:"kele",
      price:3,
      number:10
    },
    {
      name:"shupian",
      price:6,
      number:12
    },
    {
      name:"zhaji",
      price:16,
      number:2
    }
  ])

  // 计算购物车总金额的函数
  function compute() {
    let total = 0;
    for(let index in carts) {
      total += carts[index].price * carts[index].number; 
    }
    return total;
  }

  // 从购物车中移除购物项的写法
  function removeCart(index) {
    carts.splice(index, 1);
  }
  // 一键清空购物车
  function clearCart() {
    carts.splice(0, carts.length)
  }


  
</script>

<template>
  <div>
    <h1>您的购物车信息如下：</h1>
    <table border="1px">
      <thead>
        <tr>
          <th>序号</th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
      </thead>
      <!-- 当购物车中没有购物项的时候，展示这个 tbody -->
      <tbody v-if="carts.length > 0">
        <tr v-for="(cart, index) in carts" v-bind:key="index">
          <td v-text="index + 1"></td>
          <td v-text="cart.name"></td>
          <td v-text="cart.price"></td>
          <td v-text="cart.number"></td>
          <td v-text="cart.number * cart.prices"></td>
          <td>
            <button @click="removeCart(index)">删除</button>
          </td>
        </tr>
      </tbody>

      <!-- 当购物车中有购物项的时候，展示这个 tbody -->
      <tbody v-else>
        <tr>
          <td colspan="6">购物车空了</td>
        </tr>
      </tbody>
    </table>
    购物车总金额：{{ compute() }} 元
    <!-- 一键清空购物车 -->
     <button @click="clearCart()">一键清空购物车</button>
    
     
    
    <hr>
    <ul>
      <li v-for="(item, index) in items" v-bind:key="item.id">
        {{ index+1 }} {{ item.message }}
      </li>
    </ul>


  </div>
</template>

<style scoped>

</style>
