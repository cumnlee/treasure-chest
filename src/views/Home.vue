<template>
    <div class="home" id="Home">
        <p class="url-list" v-for="(item,index) of list" :key="index">
            <router-link class="url" :to="item.url">{{index + 1}}. {{item.name}}</router-link>
        </p>
        <div class="hairline-example hairline"></div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    components: {

    },
    data(){
        return {
            list:[
                {
                    name:'模态框滚动穿透',
                    url:'/test1'
                },
                {
                    name:'ios中input唤出虚拟键盘改变页面高度影响布局',
                    url:'/test2'
                },
                {
                    name:'移动端border 1px',
                    url:'/test3'
                },
                {
                    name:'使用promise封装ajax',
                    url:'/test4'
                },
                {
                    name:'mand mobile尝试',
                    url:'/test5',
                    params:{
                        id:'1',
                    }
                }
            ],
            a:1
        }
    },
    computed:{
        aPlus(){
            return this.a + 10;
        }
    },
    watch:{
        aPlus(newVal,oldVal){
            console.log(newVal,oldVal);
        }
    },
    created(){
        
    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
    #Home{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 20px;
        overflow: auto;
        .url-list{
            padding: 10px 0;
        }
        .url{
            color: #000000;
            // text-decoration: none;
        }
    }
</style>