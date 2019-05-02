<template>
    <div id="Test3">
        <p>无处理</p>
        <div class="no-hair-line"></div>
        <p>有处理</p>
        <div class="have-hair-line hairline"></div>
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
    #Test3{
        width: 100%;
        height: 100%;
        overflow: auto;
        box-sizing: border-box;
        padding: 20px;
        p{
            padding: 20px 0;
        }
        .no-hair-line{
            width: 300px;
            height: 300px;
            margin: auto;
            border: 1px solid black;
            border-radius: 10px;
        }
        .have-hair-line{
            width: 300px;
            height: 300px;
            margin: auto;
        }
        [class*='hairline']{
            position: relative;
        }
        .hairline::after{
            content: "";
            pointer-events: none; /* 防止点击触发 */
            box-sizing: border-box;
            position: absolute;
            top: -50%;
            left: -50%;
            right: -50%;
            bottom: -50%;
            transform: scale(0.5);
            border-radius: 20px; /* 被缩小后，值应为目标大小的两倍 */
            border: 1px solid black;
            transform: scale(0.5);
        }
    }
</style>