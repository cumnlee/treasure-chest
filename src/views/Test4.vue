<template>
    <div id="Test4">
        <p v-for="(item,index) of list" :key="index">姓名：{{item.name}} | 年龄：{{item.age}}</p>
        <div class="button" @click="getTest('/mock/test1.json',{})">请求test1.json</div>
        <div class="button" @click="getTest('/mock/test2.json',{})">请求test2.json</div>
        <div class="button" @click="getTestInline">先请求test1.json,后请求test2.json</div>
        <div class="button" @click="list = []">清空</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[],
        }
    },
    created(){
        
    },
    methods:{
        getJson(url,data){
            var that = this;
            return that.ajax(url,data)
        },
        getTest(url,data){
            this.getJson(url,data).then((res) => {
                console.log('getTest',res);
                this.list = res;
            });
        },
        getTestInline:function(){
            this.getJson('/mock/test1.json',{}).then((res)=>{
                console.log('getTestInline1',res);
                this.list = res;
                return this.getJson('/mock/test2.json',{});
            }).then((res)=>{
                console.log('getTestInline2',res);
                this.list = this.list.concat(res);
                return this.getJson('/mock/test1.json',{});
            });
        }
    }
}
</script>

<style lang="less" scoped>
    #Test4{
        width: 100%;
        height: 100%;
        overflow: auto;
        box-sizing: border-box;
        padding: 20px;
        p{
            padding: 20px 0;
        }
        .button{
            text-decoration: underline;
            padding: 10px;
            border: 1px solid black;
            text-align: center;
            margin: 0 0 5px;
            border-radius: 4px;
        }
    }
</style>