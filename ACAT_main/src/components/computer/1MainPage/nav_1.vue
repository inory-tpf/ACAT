<template>
    <div class="main">
        <div class="backColor"></div>
        <div class="nav">
            <div class="logo"></div>
            <ul class="nav-list">
                <li class="item" @click="tp(1)">了解我们</li>
                <li class="item" @click="tp(2)">组别介绍</li>
                <li class="item" @click="tp(3)" v-if="blog">博客</li>
                <li class="item" @click="tp(4)" v-if="joinUs">加入我们</li>
            </ul>
        </div>
        <loop></loop>
        <div class="fonts">
            <div class="font1">计算机应用技术协会</div>
            <div class="font2">Association of Computer Applied Technology</div>
        </div>
    </div>
</template>
<script>
import loop from "./loop";
import store from "../../../vuex/store";
import { mapState } from "vuex";
export default {
    name: "nav_1",
    data() {
        return {};
    },
    components: {
        loop,
    },
    methods: {
        tp(num) {
            if (num === 1) {
                //跳转至了解我们
                this.$router.replace("/history");
            }
            if (num === 2) {
                //跳转至组别介绍
                this.$router.replace("/group");
            }
            if (num === 3) {
                window.open(this.blogLocation);
                //跳转至博客
            }
            if (num === 4) {
                window.open(this.joinUsLocation);
                //跳转至纳新界面
            }
        },
    },
    store,
    computed: {
        ...mapState(["blog", "joinUs","blogLocation","joinUsLocation"]),
    },
};
</script>
<style scoped>
.main {
    width: 100%;
    height: 100%;
    box-shadow: 0px 5px 15px rgb(0, 0, 0);
}
.backColor {
    position: absolute;
    width: 100%;
    height: 38vw;
    background-color: rgb(60, 66, 78);
    box-shadow: 0px 0px 10px rgb(0, 0, 0);
}
.nav {
    position: absolute;
    width: 100%;
    height: 6vw;
}
.logo {
    width: 13%;
    height: 4vw;
    margin-top: 1vw;
    margin-left: 1%;
    float: left;
    background-image: url("../../../assets/img/logo/acatw.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
}
.nav-list {
    float: left;
    width: 70vw;
    height: 4vw;
    margin-top: 1vw;
}
.item {
    float: left;
    width: 10vw;
    list-style: none;
    height: 100%;
    margin-left: 1vw;
    font-size: 1.5vw;
    text-align: center;
    line-height: 4vw;
    color: rgb(255, 255, 255);
    font-weight: 600;
    transition: 0.5s ease-in-out;
    opacity: 0.85;
}
.item:hover {
    opacity: 1;
    cursor: pointer;
}

.fonts {
    position: absolute;
    width: 50vw;
    height: 30vw;
    margin-left: 27vw;
    margin-top: 8vw;
    z-index: 999;
}
.font1 {
    width: 35vw;
    height: 7vw;
    background-color: rgb(94, 176, 158);
    margin: 0 auto;
    font-size: 2.3vw;
    color: rgb(255, 255, 255);
    font-weight: 600;
    line-height: 7vw;
    margin-top: 8vw;
    letter-spacing: 0.2vw;
    opacity: 0.9;
}
.font2 {
    width: 33vw;
    height: 4vw;
    margin: 0 auto;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    line-height: 4vw;
    margin-top: 1.6vw;
    font-size: 1.3vw;
    opacity: 0.6;
}
</style>