// 导入 创建路由对象需要使用的函数
import {createRouter, createWebHashHistory} from 'vue-router'
// 导入 .vue 组件
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Update from '../components/Update.vue'
import Add from '../components/Add.vue'

// 创建一个路由对象
const router = createRouter({
    // history 属性用于记录路由的历史
    history:createWebHashHistory(),
    // routes 属性用于定义多个不同的路径和组件之间的对应的关系
    routes:[
        {
            path:"/",
            component:Home
        },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/list",
            component:List
        },
        {
            path:"/update",
            component:Update
        },
        {
            path:"/add",
            component:Add
        },
        // 重定向
        {
            path:"showAll",
            redirect:"/list"
        }
    ]
})

// 向外暴露 router
export default router