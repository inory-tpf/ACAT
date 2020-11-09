<template>
    <div class="main">
        <ul class="pages">
            <li class="page1" ref="p1">
                <img src="../../../assets/img/轮播/pic.jpg" @load="finish" />
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            time: 2000,
        };
    },
    methods: {
        finish() {
            if (document.getElementById("Loading")) {
                document.body.removeChild(document.getElementById("Loading")); // 加载页面完后移除加载动画
            }
        },
    },
};
</script>
<style scoped>
.main {
    position: absolute;
    width: 92.9%;
    height: 38vw;
    margin-left: 7vw;
    margin-top: 6vw;
    box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.5);
}
.pages {
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
.page1 {
    position: absolute;
    list-style: none;
    float: left;
    width: 100%;
    height: 100%;
    animation: page 50s ease-in-out infinite;
    z-index: 300;
}
img {
    width: 100%;
    background-size: 100% auto;
}
@keyframes page {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
</style>