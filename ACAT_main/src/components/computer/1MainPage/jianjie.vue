<template>
    <div class="main">
        <div class="biaoqian">
            <div class="back">
                <div class="item">实验室简介</div>
            </div>
        </div>
        <div class="border1" ref="b1"></div>
        <div class="border2" ref="b2"></div>
        <div class="border3" ref="b3"></div>
        <div class="border4" ref="b4"></div>
        <div class="logo"></div>
        <div class="logo2"></div>
        <div class="fonts">
            ACAT计算机应用技术协会是一个由老师创办 ，学生自主维护的实验室平台。其为学生提供了一个学习交流的活动平台，提高学生对计算机应用开发技术的兴趣。更好的为学生参与科技竞赛、科研训练和开放实验等实践活动创造有利条件。
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        show() {
            this.$refs.b1.style.height = "9vw";
            this.$refs.b3.style.height = "9vw";
            this.$refs.b2.style.width = "25vw";
            this.$refs.b4.style.width = "25vw";
        },
        hide() {
            this.$refs.b1.style.height = "0vw";
            this.$refs.b3.style.height = "0vw";
            this.$refs.b2.style.width = "0vw";
            this.$refs.b4.style.width = "0vw";
        },
    },
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.biaoqian {
    position: relative;
    width: 100%;
    height: 8vw;
}
.back {
    position: absolute;
    width: 15vw;
    height: 3vw;
    background-color: rgb(60, 66, 78);
    box-shadow: 0 0 15px rgb(100, 100, 100);
    margin-top: 4vw;
}
.item {
    width: 80%;
    height: 100%;
    background-color: rgb(95, 177, 159);
    margin-left: 5vw;
    margin-top: 1vw;
    color: #fff;
    font-size: 1.5vw;
    font-weight: 600;
    line-height: 3vw;
    letter-spacing: 0.3vw;
    box-shadow: 0 0 15px rgb(100, 100, 100);
}
.fonts {
    width: 80vw;
    color: rgb(60, 66, 78);
    font-size: 1.7vw;
    text-align: left;
    margin-left: 10%;
    text-indent: 3vw;
    letter-spacing: 0.15vw;
    line-height: 2.5vw;
    margin-top: 5vw;
}
.border1,
.border2,
.border3,
.border4 {
    position: absolute;
    width: 0.2vw;
    height: 9vw;
    background-color: rgb(60, 66, 78);
    margin-left: 7vw;
    margin-top: 5vw;
    background-color: rgb(95, 177, 159);
    transition:1s ease-in-out ;
}
.border2,
.border4 {
    width: 25vw;
    height: 0.2vw;
    margin-left: 8vw;
    margin-top: 3vw;
    background-color: rgb(60, 66, 78);
}
.border3 {
    margin-left: 92vw;
    margin-top: 5vw;
}
.border4 {
    margin-top: 15vw;
    margin-left: 65vw;
}
.logo {
    position: absolute;
    width: 5vw;
    height: 5vw;
    background-image: url("../../../assets/img/logo/pic.png");
    background-size: 100% auto;
    right: 6vw;
}
.logo2 {
    position: absolute;
    width: 10vw;
    height: 5vw;
    background-image: url("../../../assets/img/logo/text.png");
    background-size: 100% auto;
    margin-top: 15vw;
    margin-left: 3vw;
}
</style>