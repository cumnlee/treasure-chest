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
        }
    ]
})
