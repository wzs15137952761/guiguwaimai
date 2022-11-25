/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import TakeMsite from '../pages/MSite/TakeMsite.vue'
import TakeSearch from '../pages/Search/TakeSearch.vue'
import TakeOrder from '../pages/Order/TakeOrder.vue'
import TakeProfile from '../pages/Profile/TakeProfile.vue'
import TakeLogin from '../pages/Login/TakeLogin.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    // 所有路由
    routes:[
        {
            path:'/msite',
            component:TakeMsite,
            meta:{
                FooterIsShow:true
            }
        },
        {
            path:'/search',
            component:TakeSearch,
            meta:{
                FooterIsShow:true
            }
        },
        {
            path:'/order',
            component:TakeOrder,
            meta:{
                FooterIsShow:true
            }
        },
        {
            path:'/profile',
            component:TakeProfile,
            meta:{
                FooterIsShow:true
            }
        },
        {
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/login',
            component:TakeLogin
        }
    ]
})