import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            // component: Home
            component:() => import(/* webpackChunkName: "home" */ './views/Home.vue'),
        },
        {
            path:'/test1',
            name:'test1',
            component:() => import(/* webpackChunkName: "test1" */ './views/Test1.vue'),
        },
        {
            path:'/test2',
            name:'test2',
            component:() => import(/* webpackChunkName: "test2" */ './views/Test2.vue'),
        },
        {
            path:'/test3',
            name:'test3',
            component:() => import(/* webpackChunkName: "test3" */ './views/Test3.vue'),
        },
        {
            path:'/test4',
            name:'test4',
            component:() => import(/* webpackChunkName: "test4" */ './views/Test4.vue'),
        },
        {
            path:'/test5',
            name:'test5',
            component:() => import(/* webpackChunkName: "test5" */ './views/Test5.vue'),
        }
    ]
})
