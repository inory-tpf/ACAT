<template>
  <div class="main">
       <div class="fonts">
          <div class="bigfonts1">{{msg.title1}}</div>
          <div class="bigfonts2">{{msg.title2}}</div>
      </div>
      <div class="pic"></div>
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
    background-image: url("../../../../assets/img/组别/机器学习/VCG41N960572272.jpg");
    background-size: 100% auto;
}
.fonts{
        position: absolute;
        width: 40vw;
        height: 20vw;
        margin-left: 10vw;
        margin-top: 12vw;
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
        margin-left: 3vw;
        text-indent: 6vw;
    }
    .pic{
        position: absolute;
        width: 70%;
        height: 50vw;
        background-image: url("../../../../assets/img/组别/机器学习/首屏.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        margin-top: 4vw;
        margin-left: 35%;
    }
</style>