<template>
    <div class="main">
        <div class="fonts">
            <div class="bigfonts">前端能做什么</div>
            <div class="smallfonts">
                这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字
            </div>
        </div>
        <div class="picplace">
            <div class="pic1"></div>
            <div class="pic2"></div>
            <div class="pic3"></div>
        </div>
    </div>
</template>

<script>
export default {};
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
    text-indent: 3vw;
    text-align: left;
    line-height: 2.3vw;
    letter-spacing: 0.17vw;
}
.picplace {
    float: left;
    width: 40vw;
    height: 40vw;
    margin-left: 4vw;
    margin-top: 6vw;
}
.pic1{
  float: left;
  width: 47.5%;
  height: 95%;
  background-color: saddlebrown;
  margin-left: 2.5%;
  margin-top: 2.5%;
  background-image: url("../../../../assets/loop/VCG41N801030524.jpg");
  background-size: auto 100%;
  box-shadow: 0 0 10px rgb(0, 0, 0,.6);
}
.pic2{
  float: left;
  width: 45%;
  height: 35%;
  background-color: sandybrown;
  margin-top: 2.5%;
  margin-left: 2.5%;
  background-image: url("../../../../assets/loop/VCG41N613776610.jpg");
  background-size: auto 100%;
  box-shadow: 0 0 10px rgb(0, 0, 0,.6);

}
.pic3{
  float: left;
  width: 45%;
  height: 57.5%;
  background-color: skyblue;
  margin-left: 2.5%;
  margin-top: 2.5%;
  background-image: url("../../../../assets/loop/VCG211198546636.jpg");
  background-size: auto 100%;
  box-shadow: 0 0 10px rgb(0, 0, 0,.6);
}
</style>