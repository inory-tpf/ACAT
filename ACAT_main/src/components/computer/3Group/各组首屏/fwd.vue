<template>
  <div class="main">
       <div class="fonts">
          <div class="bigfonts1">{{msg.title1}}</div>
          <div class="bigfonts2">{{msg.title2}}</div>
      </div>
      <div class="back"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        
        }
    },
    props:['msg']
}
</script>

<style scoped>
.main{
    width: 100%;
    height: 100%;
    background-image: url("../../../../assets/img/组别/服务端/VCG41N928626192.jpg");
    background-size: 100% auto;
}
.fonts{
        position: absolute;
        width: 60vw;
        height: 20vw;
        margin-left: 8vw;
        margin-top: 15vw;
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
    }
    .back{
        position: absolute;
        width: 50vw;
        height: 40vw;
        background-image: url("../../../../assets/img/组别/服务端/back.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        right: 5vw;
        top: 6vw;
    }
</style>