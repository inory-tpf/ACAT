<template>
    <div class="main">
        <div class="fonts">
            <div class="bigfonts">{{ msg.title1 }}的发展前景</div>
            <div class="smallfonts" v-html="msg.font3"></div>
        </div>
        <!-- <div class="join">Join Us</div> -->
        <div class="loop">
            <div class="pic1"><img :src="msg.pic3_1" /></div>
            <div class="pic1"><img :src="msg.pic3_2" /></div>
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
    margin-top: 13vw;
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
    height: 45vw;
    /* transform: rotateZ(-25deg); */
    margin-left: 60vw;
    box-shadow: 0 0 15px rgb(70, 70, 70);
    margin-top: 5vw;
    padding: 0;
}
img {
    width: auto;
    height: 100%
}
.pic1{
    position: relative;
    width: 100%;
    height: 50%
    
}
</style>