<script setup>
  /**
    v-text：用户绑定双标签中间的内容，但是其不识别 HTML 结构的文本，类似于 innerText
    v-html：识别文本中 HTML 结构的文本，类似于 innerHTML

    形如 {{ }} 称为插值表达式
    形如 v-v** 的称为 vue 指令
    1.命令必需依赖标签，在开始标签中使用
   */

  let msg = "hello vue3"
  // 命令是支持字符串模板的
  let haha = "haha";
  let msg2 = `hello ${haha}`
  // 命令支持常见的运算符
  let age = 20;
  // 命令中支持常见的 API 操作
  let bee = "蜜 蜂";
  // 命令中也支持函数的调用
  let getMsg = () => {
    return "hello";
  }
</script>

<template>
  <div>
    <h1 v-text="msg"></h1>
    <h1 v-text="msg2"></h1>
    <h1 v-text="`你好 ${msg2}`"></h1>
    <h1 v-text="age>=18 ? 'yes':'no'"></h1>
    <h1 v-text="bee.split(' ').reverse().join('')"></h1>
    <h1 v-text="getMsg()"></h1>
  </div>
</template>

<style scoped>

</style>

