<template>
    <div class="main" @mousemove="move">
        <!-- <div class="box1">
            <div class="frame" ref="frame"></div>
            <div class="pic1" ref="pic"></div>
        </div> -->
        <div class="left">
            <div class="label-fonts">实验室主要成果</div>
            <div class="achpic1"></div>
            <div class="achname">学校选课系统</div>
            <div class="achfonts">这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字</div>

        </div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            x: 0,
        };
    },
    methods: {
        // move(e) {
        //     this.$refs.frame.style.marginLeft = 0.001 * e.clientX + "vw";
        //     this.$refs.frame.style.marginTop = 0.001 * e.clientY + "vw";
        //     this.$refs.pic.style.marginLeft = 2 + 0.0007 * e.clientX + "vw";
        //     this.$refs.pic.style.marginTop = 2 + 0.0007 * e.clientY + "vw";
        // },
    },
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.left {
    float: left;
    width: 30%;
    height: 100%;
    margin-left: 10vw;
}
.right {
    float: left;
    width: 50%;
    height: 100%;
    background-color: aquamarine;
}
.label-fonts {
    width: 15vw;
    height: 3vw;
    margin-top: 9vw;
    color: rgb(95, 177, 159);
    font-weight: 600;
    font-size: 2vw;
    margin-left: -2vw;
}
.achpic1{
    width: 90%;
    height: 15vw;
  border: .3vw solid #464c58;
  background-image: url("../../../assets/img/test/IMG_20191020_205855.jpg");
  background-size: 100% auto;
  margin-top: .5vw;
}
.achname{
    width: 100%;
    height: 3vw;
    text-align: left;
    color: rgb(95, 177, 159);
    font-weight: 500;
    font-size: 1.7vw;
    line-height: 3vw;
    margin-top: .5vw;
}
.achfonts{
    width: 90%;
    height: 20vw;
    color:  #464c58;
    font-size: 1.5vw;
    font-weight: 400;
    text-align: left;
    text-indent: 3vw;
    margin-top: .5vw;
}
/* .box1 {
    position: absolute;
    width: 10vw;
    height: 10vw;
    margin-left: 10vw;
    margin-top: 10vw;
    transition: ease-in-out;
}
.frame {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(95, 177, 159);
    transition: ease-in-out;
        box-shadow: 0 0 10px rgb(60, 60, 60);

}
.pic1 {
    position: absolute;
    width: 40vw;
    height: 30vw;
    background-color: rgb(70, 76, 88);
    margin-left: 2vw;
    margin-top: 2vw;
    box-shadow: 0 0 10px rgb(60, 60, 60);
} */
</style>