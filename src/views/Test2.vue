<template>
    <div id="Test2">
        <p v-for="item of 10" :key="item">{{item}}</p>
        <input type="text" :placeholder="'请输入'">
        <!-- <p v-for="item of 100" :key="item">{{item}}</p> -->
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
    #Test2{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 20px;
        background-color: #ffffff;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
    }
</style>
