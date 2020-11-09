<template>
    <div class="main">
        <div class="fonts">
            <div class="bigfonts1" :class="{ active1: animation4 }">
                {{ msg.title1 }}
            </div>
            <div class="bigfonts2" :class="{ active2: animation4 }">
                {{ msg.title2 }}
            </div>
        </div>
        <div class="pic" :class="{ active3: animation4 }"></div>
        <remin :class="{ active4: animation4 }"></remin>
    </div>
</template>

<script>
import remin from "../../public/remin";
import store from "@/vuex/store";
import { mapState } from "vuex";
export default {
    data() {
        return {};
    },
    props: ["msg"],
    components: {
        remin,
    },
    store,
    computed: {
        ...mapState(["animation4"]),
    },
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    background-image: url("../../../../assets/img/组别/机器学习/VCG41N960572272.jpg");
    background-size: 100% auto;
}
.fonts {
    position: absolute;
    width: 40vw;
    height: 20vw;
    margin-left: 10vw;
    margin-top: 12vw;
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
    text-indent: 6vw;
    opacity: 0;
    transition: 1s 1.2s ease-in-out;
}
.pic {
    position: absolute;
    width: 70%;
    height: 50vw;
    background-image: url("../../../../assets/img/组别/机器学习/首屏.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
    margin-top: 4vw;
    margin-left: 35%;
    opacity: 0;
    transition: 1s 1.5s ease-in-out;
}
.active3 {
    opacity: 1;
}
.active1,
.active2 {
    opacity: 1;
    margin-left: 0;
}
.active2 {
    margin-left: 3vw;
}
.active4 {
    bottom: 0vw;
}
</style>