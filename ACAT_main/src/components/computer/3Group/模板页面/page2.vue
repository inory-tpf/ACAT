<template>
    <div class="main">
        <div class="fonts">
            <div class="bigfonts" :class="{ active1: animation }">
                {{ msg.title1 }}能做什么
            </div>
            <div
                class="smallfonts"
                v-html="msg.font2"
                :class="{ active2: animation }"
            ></div>
        </div>
        <div class="picplace">
            <div class="pic1" :class="{ active3: animation }">
                <img :src="msg.pic2_1" />
            </div>
            <div class="pic2" :class="{ active4: animation }">
                <img :src="msg.pic2_2" />
            </div>
            <div class="pic3" :class="{ active5: animation }">
                <img :src="msg.pic2_3" />
            </div>
        </div>
    </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState } from "vuex";
export default {
    data() {
        return {
            animation: false,
        };
    },
    props: ["msg"],
    store,
    computed: {
        ...mapState(["page"]),
    },
    watch: {
        page() {
            if (this.page == 2) {
                this.animation = true;
            } else {
                this.animation = false;
            }
        },
    },
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.fonts {
    float: left;
    width: 40vw;
    height: 30vw;
    margin-left: 10vw;
    margin-top: 27vh;
    color: rgb(70, 76, 88);
    font-size: 1.6vw;
}
.bigfonts {
    width: 100%;
    height: 2vw;
    text-align: left;
    font-size: 2vw;
    font-weight: 600;
    letter-spacing: 0.2vw;
    opacity: 0;
    transition: 0.5s ease-in-out;
    margin-left: -2vw;
}
.smallfonts {
    width: 100%;
    margin-top: 2vw;
    text-align: left;
    line-height: 2.3vw;
    letter-spacing: 0.17vw;
    text-indent: 0;
    transition: 0.5s 0.2s ease-in-out;
    opacity: 0;
}
.picplace {
    float: left;
    width: 40vw;
    height: 40vw;
    margin-left: 4vw;
    margin-top: 12vh;
}
.pic1,
.pic2,
.pic3 {
    float: left;
    width: 47.5%;
    height: 95%;
    margin-left: 2.5%;
    margin-top: 2.5%;
    box-shadow: 0 0 15px rgb(70, 70, 70);
    overflow: hidden;
    transition: 0.5s 0.4s ease-in-out;
    opacity: 0;
    transform: scale(0.5);
}
.pic2 {
    float: left;
    width: 45%;
    height: 35%;
    transition: 0.5s 0.6s ease-in-out;
}
.pic3 {
    float: left;
    width: 45%;
    height: 57.5%;
    transition: 0.5s 0.8s ease-in-out;
}
img {
    width: auto;
    height: 100%;
}
.active1,
.active2 {
    opacity: 1;
    margin-left: 0vw;
}
.active3,
.active4,
.active5 {
    opacity: 1;
    transform: scale(1);
}
</style>