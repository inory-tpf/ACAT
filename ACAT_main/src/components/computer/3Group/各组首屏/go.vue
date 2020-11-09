<template>
    <div class="main">
        <div class="fonts">
            <div class="bigfonts2">{{ msg.title2 }}</div>
        </div>
        <div class="pic1"></div>
        <div class="pic2"></div>
        <remin></remin>
    </div>
</template>

<script>
import remin from "../../public/remin";
export default {
    data() {
        return {};
    },
    props: ["msg"],
    components: {
        remin,
    },
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("../../../../assets/img/组别/后台/go/back.jpg");
    background-size: 100% auto;
}
.fonts {
    position: absolute;
    width: 60vw;
    height: 20vw;
    margin-left: 20vw;
    margin-top: 42vh;
    z-index: 99;
    font-size: 3vw;
    color: rgb(70, 76, 88);
    font-weight: 600;
    text-align: left;
}
.bigfonts1 {
    font-size: 4vw;
}
.bigfonts2 {
    margin-top: 1vw;
    margin-left: 3vw;
}
.pic1 {
    position: absolute;
    width: 60vw;
    height: 30vw;
    background-image: url("../../../../assets/img/组别/后台/go/gopic.png");
    background-size: 100% auto;
    bottom: 0;
    right: -5vw;
}
.pic2 {
    width: 40vw;
    height: 12vw;
    background-image: url("../../../../assets/img/组别/后台/go/gopic2.png");
    background-size: 100% auto;
    margin-top: 20vh;
    margin-left: 5vw;
}
</style>