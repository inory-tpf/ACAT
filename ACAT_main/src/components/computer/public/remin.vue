<template>
  <div class="main2">
      <div class="logo"></div>
      <div class="fonts">滑动滚轮展示更多</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main2{
    position: absolute;
    width: 30vw;
    height: 5vw;
    bottom: 0;
    background-image: none;
}
.logo{
    float: left;
    width: 5vw;
    height: 5vw;
    background-image: url("../../../assets/img/logo/pic.png");
    background-size: 100% 100%;
}
.fonts{
    float: left;
    width: 45%;
    height: 5vw;
    font-size: 1.5vw;
    font-weight: 600;
    color: rgb(70, 76, 88);
    line-height: 7vw;
}
</style>