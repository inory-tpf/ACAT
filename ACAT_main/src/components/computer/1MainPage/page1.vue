<template>
    <div class="main">
        <show></show>
        <!-- <animation1></animation1> -->
        <div class="pic" ref="scroll"></div>
        <div class="part1">
            <Mynav></Mynav>
        </div>
        <div class="part2">
            <Shicha ref="animation1"></Shicha>
        </div>
        <div class="part3">
            <jianjie ref="animation2"></jianjie>
        </div>
        <div class="part4">
            <group></group>
        </div>
        <div class="part5">
            <Picwall></Picwall>
        </div>
        <div class="part6">
            <Acatmap ref="animation3"></Acatmap>
        </div>
    </div>
</template>

<script>
import Mynav from "@/components/computer/1MainPage/nav_1";
import Shicha from "@/components/computer/1MainPage/shicha";
import Picwall from "@/components/computer/1MainPage/picwall";
import Acatmap from "@/components/computer/1MainPage/map";
import group from "@/components/computer/1MainPage/group";
import jianjie from "./jianjie";
import show from "./show"
export default {
    name: "page",
    data() {
        return {};
    },
    methods: {
        picscroll() {
            this.$refs.scroll.style.marginTop =
                -window.pageYOffset * 0.1 + "px";
        },
        scroll() {
            this.picscroll();
            let vw = document.body.clientWidth / 100;
            let percent = window.pageYOffset / vw;
            if (percent >= 30 && percent <= 70) {
                this.$refs.animation1.show();
            }else{
                this.$refs.animation1.hide()
            }
            if(percent >= 60 && percent <=100){
                this.$refs.animation2.show()
            }else{
                this.$refs.animation2.hide()
            }
              if(percent >= 190 && percent <=250){
                this.$refs.animation3.show()
            }else{
                this.$refs.animation3.hide()
            }
        },
    },
    components: {
        Mynav,
        Shicha,
        Picwall,
        Acatmap,
        group,
        jianjie,
        animation1,
        show,
    },
    mounted() {
        document.addEventListener("scroll", this.scroll, true);
    },
    beforeRouteLeave(to, from, next) {
        // ...
        document.removeEventListener("scroll", this.scroll, true);
        next();
    },
    watch: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
    float: left;
    width: 100%;
    height: 100%;
}
.part1 {
    width: 100%;
    height: 55vw;
    background-color: rgb(235, 238, 238);
}
.part2 {
    width: 100%;
    height: 27vw;
}
.part3 {
    width: 100%;
    height: 30vw;
    box-shadow: 0 0 15px rgb(70, 70, 70);
    background-color: rgb(235, 238, 238);
}
.part4 {
    width: 100%;
    height: 50vw;
    background-color: rgb(235, 238, 238);
}
.part5 {
    width: 100%;
    height: 55vw;
    background-color: rgb(235, 238, 238);
}
.part6 {
    width: 100%;
    height: 45vw;
    background-color: rgb(235, 238, 238);
}
.pic {
    position: fixed;
    width: 100%;
    height: 60vw;
    background-image: url("../../../assets/img/视差/QQ图片20201010174541.jpg");
    background-size: 100% auto;
    z-index: -1;
    background-position: 0 -20vw;
}
</style>
