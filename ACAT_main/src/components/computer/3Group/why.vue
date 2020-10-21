<template>
    <div class="main">
        <div class="fonts">
            这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里
        </div>
        <div class="groups">
            <div class="qd" @mouseenter="mousein(1)" @click="jump(1)" ref="id1">
                前端
            </div>
            <div
                class="fwd"
                @mouseenter="mousein(2)"
                @click="jump(2)"
                ref="id2"
            >
                服务端
            </div>
            <div class="ht" @mouseenter="mousein(3)" @click="jump(3)" ref="id3">
                后台
            </div>
            <div
                class="jqxx"
                @mouseenter="mousein(4)"
                @click="jump(4)"
                ref="id4"
            >
                机器学习
            </div>
        </div>
        <ul class="lang">
            <li class="lang-1"></li>
            <li class="lang-2"></li>
            <li class="lang-3"></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        mousein(value) {},
        jump(value) {
            this.$emit("pagevalue", value + 1);
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
    width: 50%;
    height: 30vw;
    margin-top: 15vw;
    margin-left: 8%;
    font-size: 1.75vw;
    color: rgb(70, 76, 88);
    text-indent: 3vw;
    line-height: 2.8vw;
    letter-spacing: 0.3vw;
    text-align: left;
}
.groups {
    float: left;
    width: 42%;
    height: 100%;
    font-size: 1.55vw;
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
    transition: .3s ease-in-out;
}
@keyframes qd {
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(0, 1vw);
    }
    100%{
        transform: translate(0, 0);
    }
}
.qd:hover,.ht:hover,.fwd:hover,.jqxx:hover{
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
</style>