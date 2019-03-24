<template>
    <div id="Test1">
        <div class="test1-list">
            <p v-for="item of 100" :key="item">文本行{{item}}</p>    
        </div>
        <div class="modal">
            <p v-for="item of 50" :key="item">内部滚动文本{{item}}</p>
        </div>
    </div>
</template>

<script>
// 模态框滚动穿透问题
export default {
    name:'Test1',
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
    #Test1{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        .test1-list{
            width: 100%;
            height: 100%;
            padding: 20px;
            box-sizing: border-box;
            overflow: auto;
        }
        .modal{
            position: fixed;
            top: 50%;
            left: 50%;
            margin: -200/36rem 0 0 -150/36rem;
            width: 300/36rem;
            height: 400/36rem;
            border: 1px solid #eeeeee;
            overflow: auto;
        }
    }
</style>