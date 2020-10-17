<template>
  <div class="main">
      <div class="picbox">
        <div class="pic"></div>
      </div>
      <div class="fonts">
        <div class="bigfonts">前端是什么</div>
        <div class="smallfonts">这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main{
  display: inline-block;
  width: 100%;
  height: 100%;
}
  .picbox{
    position: absolute;;
    width: 25vw;
    height: 33vw;
    background-color:  rgb(95, 177, 159);
    margin-top: 9vw;
    margin-left: 15vw;
    box-shadow: 0 0 10px rgb(22, 22, 22, 0.6);
  }
  .pic{
    width: 100%;
    height: 100%;
    background-image: url("../../../../assets/Screenshot_2019-11-11-12-27-37-411_com.tencent.mo.jpg");
    background-size: 100% auto;
    background-position: 0 40%;
    margin-left: 1.5vw;
    margin-top: 1.5vw;
    box-shadow: 0 0 10px rgb(22, 22, 22, 0.8);
  }
  .fonts{
    width: 40vw;
    height: 30vw;
    margin-left: 50vw;
    margin-top: 15vw;
    color:   rgb(70, 76, 88);
    font-size: 1.6vw;
  }
  .bigfonts{
    width: 100%;
    height: 2vw;
    text-align: left;
    font-size: 2vw;
    font-weight: 600;
    letter-spacing: .2vw;
  }
  .smallfonts{
    width: 100%;
    margin-top: 2vw;
    text-indent: 3vw;
    text-align: left;
    line-height: 2.3vw;
    letter-spacing: .17vw;
  }
</style>