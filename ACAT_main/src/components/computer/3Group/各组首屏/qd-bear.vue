<template>
    <div class="main">
        <div class="fonts">
            <div class="bigfonts1" :class="{ active1: animation1 }">
                {{ msg.title1 }}
            </div>
            <div class="bigfonts2" :class="{ active2: animation1 }">
                {{ msg.title2 }}
            </div>
        </div>
        <div class="back" :class="{ active3: animation1 }"></div>
        <div class="back2"></div>
        <remin :class="{ active4: animation1 }"></remin>
    </div>
</template>

<script>
import store from "../../../../vuex/store";
import { mapState } from "vuex";
import remin from "../../public/remin";
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
        ...mapState(["animation1"]),
    },
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    background-image: url("../../../../assets/img/组别/前端/VCG41N867940870.jpg");
    background-size: 100 auto;
    overflow: hidden;
}
.back {
    position: absolute;
    width: 40vw;
    height: 33vw;
    background-image: url("../../../../assets/img/组别/前端/back.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
    right: 5vw;
    bottom: 8vh;
    z-index: 99;
    opacity: 0;
    transition: 1s 1.5s ease-in-out;
}
.back2 {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    opacity: 0.05;
    z-index: 999;
}
.fonts {
    position: absolute;
    width: 60vw;
    height: 20vw;
    margin-left: 8vw;
    margin-top: 19vw;
    z-index: 99;
    font-size: 3vw;
    color: rgb(70, 76, 88);
    font-weight: 600;
    text-align: left;
    z-index: 99;
}
.bigfonts1 {
    font-size: 4vw;
    margin-left: -3vw;
    transition: 1s 1s ease-in-out;
    opacity: 0;
}
.bigfonts2 {
    margin-top: 1vw;
    transition: 1s 1.2s ease-in-out;
    opacity: 0;
    margin-left: 5vw;
}
.active1,
.active2,
.active3 {
    opacity: 1;
    margin-left: 0;
}
.active2 {
    margin-left: 2vw;
}
.active4 {
    bottom: 0vw;
}
</style>