<template>
  <div class="main">
      <div class="fonts">
        <div class="bigfonts">前端的发展前景</div>
        <div class="smallfonts">这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字</div>
      </div>
      <div class="join">Join Us</div>
      <div class="loop"></div>
  </div>
</template>

<script>
export default {

}
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
.join{
  position: absolute;
  width: 15vw;
  height: 5vw;
  background-color:rgb(95, 177, 159,.9);
  margin-top: 38vw;
  margin-left: 8vw;
  border-radius: 2.5vw;
  color: #ffffff;
  font-size: 2vw;
  line-height: 5vw;
}
.loop{
  position: absolute;
  width: 70vw;
  height: 100vw;
  background-color: rosybrown;
  transform: rotateZ(-25deg);
  margin-left: 60vw;
  margin-top: -40vw;
  box-shadow: 0 0 20px rgb(0, 0, 0,.3);
}
</style>