<template>
  <div class="main">
    <div class="fonts-block">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="block">
        <div class="head">
          <div class="head-pic"></div>
        </div>
        <div class="fonts">
          这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字
        </div>
      </div>
    </div>
    <div class="pic-block">
      <div class="pic1"></div>
      <div class="pic2"></div>
      <div class="pic3"></div>
    </div>
    <div class="angle">
        <div class="logo"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;
}
.fonts-block {
  float: left;
  width: 30%;
  height: 50vw;
  margin-left: 14vw;
}
.line1,
.line2 {
  float: left;
  width: 0.2vw;
  height: 7vw;
  background-color: rgb(22, 22, 22, 0.8);
  margin-left: 5vw;
}
.line2 {
  margin-left: 20vw;
}
.block {
  width: 30vw;
  height: 40vw;
  background-color: rgb(70, 76, 88);
  margin-top: 7vw;
  overflow: hidden;
  box-shadow: 0 0 10px rgb(22, 22, 22, 0.8);
}
.head {
  float: left;
  width: 80%;
  height: 30%;
  margin-left: 5%;
  margin-top: 5%;
  background-color: rgb(95, 177, 159);
}
.head-pic {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/Screenshot_2019-11-11-12-27-37-411_com.tencent.mo.jpg");
  background-size: 100% auto;
  background-position: 0 45%;
  margin-left: 6%;
  margin-top: 5%;
  box-shadow: 0 0 10px rgb(22, 22, 22, 0.8);
}
.fonts {
  width: 80%;
  margin-top: 53%;
  margin-left: 6%;
  font-size: 1.55vw;
  color: rgb(255, 255, 255, 0.9);
  text-indent: 3vw;
  line-height: 2.5vw;
  letter-spacing: 0.15vw;
  text-align: left;
  background-color: rgb(75, 81, 93);
  border: 1vw solid rgb(75, 81, 93);
  border-radius: 5px;
  box-shadow: 0 0 15px rgb(22, 22, 22, 0.2);
}
.pic-block {
  float: left;
  width: 42vw;
  height: 42.5vw;
  margin-top: 5vw;
  margin-left: 3vw;
}
.pic1,
.pic2,
.pic3 {
  position: absolute;
  width: 18vw;
  height: 22vw;
  background-color: rgb(95, 177, 159);
  margin-left: 2vw;
  margin-top: 1vw;
  box-shadow: 0 0 15px rgb(22, 22, 22, 0.4);
  background-image: url("../../../assets/IMG_20191020_205722.jpg");
  background-size: auto 100%;
}
.pic2 {
  height: 18vw;
  background-color: rosybrown;
  margin-left: 22vw;
  margin-top: 7vw;
  z-index: 99;
  background-image: url("../../../assets/IMG_20190421_135405.jpg");
  background-size: auto 100%;
}
.pic3 {
  background-color: salmon;
  margin-top: 21vw;
  margin-left: 12vw;
  width: 16vw;
  height: 20vw;
  background-image: url("../../../assets/IMG_20191214_205044.jpg");
  background-size: auto 100%;
}
.angle{
    position: absolute;
    width: 20vw;
    height: 20vw;
    background-color: rgb(70, 76, 88);
    right: -10vw;
    bottom: -10vw;
    transform: rotateZ(45deg);
    box-shadow: 0 0 10px rgb(22, 22, 22, 0.9);
}
.logo{
    width: 8vw;
    height: 8vw;
    background-image: url("../../../assets/logo/catw.png");
    background-size: 100% 100%;
        transform: rotateZ(-45deg);
    margin-top: 6vw;
}
</style>