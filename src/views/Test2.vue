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
        overflow: auto;
    }
</style>
