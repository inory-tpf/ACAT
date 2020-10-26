<template>
    <div class="main">
        <div class="fonts">
            <div class="bigfonts1">{{ msg.title1 }}</div>
            <div class="bigfonts2">{{ msg.title2 }}</div>
        </div>
        <div class="frame">
            <div class="demo1"></div>
            <div class="demo2"></div>
            <div class="demo3"></div>
            <div class="demo5"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ["msg"],
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.frame{
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 14vw;
}
.demo1 {
    width: 100%;
    height: 469px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url("../../../../assets/img/动画效果/小熊/bg3.png") no-repeat;
    opacity: 0.2;
    animation: hill1 50s linear infinite;
}
.demo2 {
    width: 100%;
    height: 269px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url("../../../../assets/img/动画效果/小熊/bg4.png") no-repeat;
    opacity: 0.6;
    animation: hill2 40s linear infinite;
}
.demo3 {
    width: 100%;
    height: 269px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url("../../../../assets/img/动画效果/小熊/bg2.png") no-repeat;
    opacity: 1;
    animation: hill3 30s linear infinite;
}

.demo5 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 100px;
    background: url("../../../../assets/img/动画效果/小熊/bear.png") no-repeat;
    /* 我们元素可以添加多个动画， 用逗号分隔 */
    animation: bear 0.5s steps(8) infinite, move 3s forwards;
}

@keyframes bear {
    from {
        background-position: 0 0;
    }
    to {
        background-position: -1600px 0;
    }
}

@keyframes move {
    0% {
        left: 0;
    }
    100% {
        left: 50%;
        transform: translateX(-50%);
    }
}
@keyframes hill1 {
    from {
        background-position: 0 0;
    }
    to {
        background-position: 100% 0;
    }
}
@keyframes hill2 {
    from {
        background-position: 1400 0;
    }
    to {
        background-position: 100% 0;
    }
}
@keyframes hill3 {
    from {
        background-position: 0 0;
    }
    to {
        background-position: 100% 0;
    }
}
.fonts {
    position: absolute;
    width: 60vw;
    height: 20vw;
    margin-left: 11vw;
    margin-top: 10vw;
    z-index: 99;
    font-size: 3vw;
    color: rgb(70, 76, 88);
    font-weight: 600;
    text-align: left;
}
.bigfonts1 {
    font-size: 4vw;
}
.bigfonts2 {
    margin-top: 1vw;
    margin-left: 5vw;
}
</style>