<template>
    <div class="main">
        <div class="bigfonts" :class="{ active1: animation }">
            实验室为什么要分组
        </div>
        <div class="fonts" :class="{ active2: animation }">
            计算机应用技术协会(ACAT)自从建立以来,经过了多年的进步演变,逐渐形成了如今的模式。主要分为了四个组别:前端,后台(JAVA+GO),机器学习,服务端。四个组别分工明确,互相配合。无论哪个方向,都是实验室的重点方向,非常重要,缺一不可,共同构成了ACAT这个大家庭。
        </div>
        <div class="groups" :class="{ active3: animation }">
            <div class="qd" @click="jump(1)" ref="id1">前端</div>
            <div class="fwd" @click="jump(2)" ref="id2">服务端</div>
            <div class="ht" @click="jump(3)" ref="id3">后台</div>
            <div class="jqxx" @click="jump(4)" ref="id4">机器学习</div>
        </div>
        <ul class="lang" :class="{ active1: animation }">
            <li class="lang-1"></li>
            <li class="lang-2"></li>
            <li class="lang-3"></li>
        </ul>
    </div>
</template>

<script>
import store from "@/vuex/store";
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            animation: false,
        };
    },
    methods: {
        jump(value) {
            this.$emit("pagevalue", value + 1);
            if (value == 3) {
                this.groupChange("open");
            }
            value++;
            this.stateChange(value);
        },
        ...mapMutations(["groupChange", "stateChange"]),
    },
    store,
    mounted() {
        setTimeout(() => {
            this.animation = true;
        }, 200);
    },
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.bigfonts {
    position: absolute;
    height: 5vw;
    color: rgb(86, 158, 142);
    font-size: 2vw;
    margin-top: 27vh;
    margin-left: 7vw;
    font-weight: 600;
    opacity: 0;
    transition: 0.5s ease-in-out;
}
.fonts {
    float: left;
    width: 50%;
    height: 30vw;
    margin-top: 40vh;
    margin-left: 8%;
    font-size: 1.75vw;
    color: rgb(70, 76, 88);
    text-indent: 3vw;
    line-height: 2.8vw;
    letter-spacing: 0.1vw;
    text-align: left;
    opacity: 0;
    transition: 0.5s 0.5s ease-in-out;
}
.groups {
    position: absolute;
    width: 42%;
    height: 100%;
    font-size: 1.55vw;
    right: 0;
    bottom: -35vw;
    opacity: 0;
    transition: 1s 0.8s ease-in-out;
}
.qd,
.fwd,
.ht,
.jqxx {
    position: absolute;
    width: 9vw;
    height: 9vw;
    border-radius: 50%;
    background-color: #7bdcfe;
    margin-left: 10vw;
    margin-top: 8vw;
    line-height: 9vw;
    color: rgb(70, 76, 88);
    box-shadow: 0 0 15px rgb(90, 90, 90);
    cursor: pointer;
    animation: qd 10s ease-in-out infinite;
    transition: 0.3s ease-in-out;
    z-index: 999;
}
@keyframes qd {
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(0, 1vw);
    }
    100% {
        transform: translate(0, 0);
    }
}
.qd:hover,
.ht:hover,
.fwd:hover,
.jqxx:hover {
    box-shadow: 0 0 20px rgb(70, 70, 70);
}
.fwd {
    width: 9vw;
    height: 9vw;
    line-height: 9vw;
    background-color: #ce916a;
    margin-left: 25vw;
    margin-top: 12vw;
}
.ht {
    width: 10vw;
    height: 10vw;
    line-height: 10vw;
    background-color: #b5cea8;
    margin-top: 22vw;
    margin-left: 7vw;
}
.jqxx {
    width: 9.5vw;
    height: 9.5vw;
    line-height: 9.5vw;
    background-color: #d7ab4c;
    margin-top: 26vw;
    margin-left: 22vw;
}
.lang {
    position: absolute;
    width: 100%;
    height: 8vw;
    bottom: 0;
    padding: 0;
    margin: 0;
    z-index: 999;
    opacity: 0;
    transition: 0.5s ease-in-out;
}
.lang-1,
.lang-2,
.lang-3 {
    position: absolute;
    width: 120vw;
    height: 100%;
    margin-left: -10vw;
    background-image: url("../../../assets/img/icon/浪.png");
    background-size: 100% 100%;
    animation: mian1 10s ease-in-out infinite;
    opacity: 0.7;
}

.lang-2 {
    margin-left: 0;
    animation: mian2 10s ease-in-out infinite;
}
.lang-3 {
    margin-left: -5vw;
    animation: mian3 10s ease-in-out infinite;
}
@keyframes mian {
    0% {
        margin-left: -1vw;
    }
    50% {
        margin-left: -15vw;
    }
    100% {
        margin-left: -1vw;
    }
}
@keyframes mian2 {
    0% {
        margin-left: -18vw;
    }
    50% {
        margin-left: -10vw;
    }
    100% {
        margin-left: -18vw;
    }
}
@keyframes mian3 {
    0% {
        margin-left: -16vw;
    }
    50% {
        margin-left: -3vw;
    }
    100% {
        margin-left: -16vw;
    }
}
.active1,
.active2,
.active3 {
    opacity: 1;
}
.active3 {
    bottom: 0;
}
</style>