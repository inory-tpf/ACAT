<template>
    <div class="main">
        <div class="fonts">
            <div class="bigfonts">{{ msg.title1 }}能做什么</div>
            <div class="smallfonts" v-html="msg.font2"></div>
        </div>
        <div class="picplace">
            <div class="pic1">
                <img :src="msg.pic2_1" />
            </div>
            <div class="pic2">
                <img :src="msg.pic2_2" />
            </div>
            <div class="pic3">
                <img :src="msg.pic2_3" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ["msg"],
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
    margin-top: 15vw;
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
}
.smallfonts {
    width: 100%;
    margin-top: 2vw;
    text-align: left;
    line-height: 2.3vw;
    letter-spacing: 0.17vw;
    text-indent: 0;
}
.picplace {
    float: left;
    width: 40vw;
    height: 40vw;
    margin-left: 4vw;
    margin-top: 6vw;
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
}
.pic2 {
    float: left;
    width: 45%;
    height: 35%;
}
.pic3 {
    float: left;
    width: 45%;
    height: 57.5%;
}
img {
    width: auto;
    height: 100%;
}
</style>