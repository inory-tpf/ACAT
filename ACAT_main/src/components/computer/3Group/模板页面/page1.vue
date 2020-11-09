<template>
    <div class="main">
        <div class="picbox" :class="{ active1: animation }">
            <div class="pic" :class="{ active2: animation }">
                <img :src="msg.pic1" />
            </div>
        </div>
        <div class="fonts">
            <div class="bigfonts" :class="{ active3: animation }">
                {{ msg.title1 }}是什么
            </div>
            <div
                class="smallfonts"
                v-html="msg.font1"
                :class="{ active4: animation }"
            ></div>
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
            if (this.page == 1) {
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
    display: inline-block;
    width: 100%;
    height: 100%;
}
.picbox {
    position: absolute;
    width: 25vw;
    height: 33vw;
    background-color: rgb(95, 177, 159);
    margin-top: 19vh;
    margin-left: 15vw;
    box-shadow: 0 0 15px rgb(70, 70, 70);
    opacity: 0;
    transition: 0.5s ease-in-out;
}
.pic {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 15px rgb(70, 70, 70);
    overflow: hidden;
    transition: 0.5s 0.2s ease-in-out;
}
img {
    width: 100%;
    height: auto;
}
.fonts {
    width: 40vw;
    height: 30vw;
    margin-left: 50vw;
    margin-top: 33vh;
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
    margin-left: -2vw;
    transition: 0.5s 0.4s ease-in-out;
}
.smallfonts {
    width: 100%;
    margin-top: 2vw;
    text-align: left;
    line-height: 2.3vw;
    letter-spacing: 0.17vw;
    opacity: 0;
    transition: 0.5s 0.6s ease-in-out;
}
.active1,
.active3,
.active4 {
    opacity: 1;
}
.active3 {
    margin-left: 0;
}
.active2 {
    margin-left: 1.5vw;
    margin-top: 1.5vw;
}
</style>