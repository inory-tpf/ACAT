<template>
    <div class="main">
        <div class="fonts">
            <div class="bigfonts" :class="{ active1: animation }">
                {{ msg.title1 }}的发展前景
            </div>
            <div
                class="smallfonts"
                v-html="msg.font3"
                :class="{ active2: animation }"
            ></div>
        </div>
        <!-- <div class="join">Join Us</div> -->
        <div class="loop" :class="{ active3: animation }">
            <div class="pic1"><img :src="msg.pic3_1" /></div>
            <div class="pic1"><img :src="msg.pic3_2" /></div>
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
            if (this.page == 3) {
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
    margin-top: 20vh;
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
    opacity: 0;
    transition: 0.5s 0.2s ease-in-out;
}
.join {
    position: absolute;
    width: 15vw;
    height: 5vw;
    background-color: #5fb19f;
    margin-top: 38vw;
    margin-left: 8vw;
    border-radius: 2.5vw;
    color: #ffffff;
    font-size: 2vw;
    line-height: 5vw;
    box-shadow: 0 0 15px rgb(70, 70, 70);
}
.loop {
    position: relative;
    width: 40vw;
    height: 90vh;
    box-shadow: 0 0 15px rgb(70, 70, 70);
    margin-top: 5vw;
    padding: 0;
    opacity: 0;
    transition: 0.5s 0.4s ease-in-out;
    margin-left: 80vw;
}
img {
    width: auto;
    height: 100%;
}
.pic1 {
    position: relative;
    width: 100%;
    height: 50%;
}
.active1,
.active2,
.active3 {
    opacity: 1;
}
.active3 {
    margin-left: 60vw;
}
</style>