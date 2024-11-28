// 从 vue 框架中导入了一个 createApp 的函数
import { createApp } from 'vue'
// 导读全局的css样式文件，该文件中的样式或作用到所有的 .vue 元素上
import './style.css'
// 全局 css样式
import './style/test.css'
// 导入了一个 App.vue 的组件，并起了一个别名 App
import App from './App.vue'

// 将导入的 app 组件生成一个对象
let app = createApp(App)
// 将 app 对象挂载到元素ID值为app的元素上
app.mount('#app')
