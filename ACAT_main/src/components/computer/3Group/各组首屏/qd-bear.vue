<template>
    <div class="main">
        <div class="fonts">
            <div class="bigfonts1">{{ msg.title1 }}</div>
            <div class="bigfonts2">{{ msg.title2 }}</div>
        </div>
        <div class="back"></div>
        
        <div class="back2"></div>
        <remin></remin>
    </div>
</template>

<script>
import remin from "../../public/remin"
export default {
    data() {
        return {};
    },
    props: ["msg"],
    components:{
        remin
    }
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
.back{
    position: absolute;
    width: 40vw;
    height: 33vw;
    background-image: url("../../../../assets/img/组别/前端/back.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
    right: 5vw;
    bottom: 3vw;
    z-index: 99;
}
.back2{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    opacity: .05;
    z-index: 999;
}
.fonts {
    position: absolute;
    width: 60vw;
    height: 20vw;
    margin-left: 8vw;
    margin-top: 15vw;
    z-index: 99;
    font-size: 3vw;
    color: rgb(70, 76, 88);
    font-weight: 600;
    text-align: left;
    z-index: 99;
}
.bigfonts1 {
    font-size: 4vw;
}
.bigfonts2 {
    margin-top: 1vw;
    margin-left: 2vw;
}
</style>