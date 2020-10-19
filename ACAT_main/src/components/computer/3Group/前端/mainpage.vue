<template>
  <div class="main">
      <div class="fonts">
          <div class="bigfonts1">前端</div>
          <div class="bigfonts2">技术的可视化展示窗口</div>
      </div>
      <bear></bear>
  </div>
</template>

<script>
import bear from "./bear"
export default {
    data(){
        return{

        }
    },
    components:{
        bear,
    }
}
</script>

<style scoped>
.main{
    width: 100%;
    height: 100%;
    background-color: #ccc;
}
    .fonts{
        position: absolute;
        width: 40vw;
        height: 20vw;
        margin-left: 20vw;
        margin-top: 10vw;
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
</style>