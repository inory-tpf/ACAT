<template>
  <div class="main">
       <div class="fonts">
          <div class="bigfonts1"></div>
          <div class="bigfonts2">{{msg.title2}}</div>
      </div>
      <div class="pic1"></div>
      <div class="pic2"></div>
      <remin></remin>
  </div>
</template>

<script>
import remin from "../../public/remin"
export default {
    data() {
        return {
        
        }
    },
    props:['msg'],
    components:{
      remin
    }
}
</script>

<style scoped>
.main{
  width: 100%;
  height: 100%;
  background-image: url("../../../../assets/img/组别/后台/java/back.jpg");
  background-size: 100% auto;
}
.fonts{
        position: absolute;
        width: 60vw;
        height: 20vw;
        margin-left: 10vw;
        margin-top: 25vw;
        z-index: 99;
        font-size: 3vw;
        color:  rgb(70, 76, 88);
        font-weight: 600;
        text-align: left;
    }
    .bigfonts1{
        font-size: 4vw;
    }
    .bigfonts2{
        margin-top: 1vw;
        margin-left: 7vw;
    }
    .pic1{
      position: absolute;
      width: 40vw;
      height: 25vw;
      background-image: url("../../../../assets/img/组别/后台/java/logo2.png");
      background-size: 100% auto;
      background-repeat: no-repeat;
      margin-left: 5vw;
      margin-top: 5vw;
    }
    .pic2{
      position: absolute;
      width: 40vw;
      height: 30vw;
      background-image: url("../../../../assets/img/组别/后台/java/pic.png");
      background-size: 100% auto;
      margin-top: 20vw;
      right: 5vw;
    }

</style>