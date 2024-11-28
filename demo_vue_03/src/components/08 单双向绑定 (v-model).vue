<script setup>
  // 导入ref/reacyive 函数
  import { ref, reactive, toRef, toRefs } from "vue";
  /**
    单向绑定(v-bind)：只有响应式数据发生变化的时候，更新 DOM 树, 而用户在页面上更改数据不会影响响应式数据
    双向绑定(v-model)：页面上的数据由于用户的操作造成了改变，也会同步修改对应的响应式数据
        双向绑定一般都会用于表单标签
        双向绑定也有人称呼为收集表单信息的命令
        v-model:value="data"  双向绑定
        v-model:value  一般都省略   :value

   */
  let message = ref("zhangsan")

  let user = reactive({
    username:"",
    password:"",
    intro:"",
    pro:""
  })

  let hbs = ref([])
  let hb = ref([])

  function clearForm() {
    user.username = "",
    user.password = "",
    user.intro = "",
    user.pro = "",
    hbs.value.splice(0, hbs.length)
  }
  
</script>

<template>
  <div>
    <input type="text" v-bind:value="message"><br>
    <input type="text" v-model="message"><br>
    {{ message }} <br>

    <input type="text" v-model="user.username"><br>
    {{ user.username }} <br>

  复选框：hobby:
      sing <input type="checkbox" v-model="hbs" value="singsing">
      dance <input type="checkbox" v-model="hbs" value="dancedance">
      rap <input type="checkbox" v-model="hbs" value="raprap">

  单选框：hobby:
    sing <input type="radio" name="hobbies" v-model="hb" value="singsing">
    dance <input type="radio" name="hobbies" v-model="hb" value="dancedance">
    rap <input type="radio" name="hobbies" v-model="hb" value="raprap">

  简介：<textarea v-model="user.intro"></textarea>

  籍贯：
    <select v-model="user.pro">
      <option value="1">beijing</option>
      <option value="2">shanghai</option>
      <option value="3">guangzhou</option>
    </select>

  <button @click="clearForm()">clear</button>

    
    
  </div>
</template>

<style scoped>

</style>
