<template>
    <div class="main">
        <div class="fonts">
            <div class="bigfonts1" :class="{active1 : animation2}">{{ msg.title1 }}</div>
            <div class="bigfonts2" :class="{active2 : animation2}">{{ msg.title2 }}</div>
        </div>
        <div class="back" :class="{active3 : animation2}"></div>
        <remin :class="{active4 : animation2}"></remin>
    </div>
</template>

<script>
import remin from "../../public/remin";
import store from "@/vuex/store"
import {mapState} from "vuex"
export default {
    data() {
        return {};
    },
    props: ["msg"],
    components: {
        remin,
    },
    store,
    computed:{
        ...mapState(['animation2'])
    }
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    background-image: url("../../../../assets/img/组别/服务端/VCG41N928626192.jpg");
    background-size: 100% auto;
}
.fonts {
    position: absolute;
    width: 60vw;
    height: 20vw;
    margin-left: 8vw;
    margin-top: 15vw;
    z-index: 99;
    font-size: 3vw;
    color: rgb(70, 76, 88);
    font-weight: 600;
    text-align: left;
}
.bigfonts1 {
    font-size: 4vw;
    margin-left: -3vw;
    opacity: 0;
    transition: 1s 1s ease-in-out;
}
.bigfonts2 {
    margin-top: 1vw;
    margin-left: 6vw;
    opacity: 0;
    transition: 1s 1.2s ease-in-out;
}
.back {
    position: absolute;
    width: 50vw;
    height: 40vw;
    background-image: url("../../../../assets/img/组别/服务端/back.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
    right: 5vw;
    top: 12vh;
    opacity: 0;
    transition: 1s 1.5s ease-in-out;
}
.active1,.active2,.active3{
    opacity: 1;
    margin-left: 0;
}
.active2{
    margin-left: 3vw;
}
.active4{
    bottom: 0vw;
}
</style>