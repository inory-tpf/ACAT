<template>
  <div class="main">
    <div class="pic"></div>
    <div class="part1">
      <Mynav></Mynav>
    </div>
    <div class="part2">
      <Shicha></Shicha>
    </div>
    <div class="part3"></div>
    <div class="part4">
      <Picwall></Picwall>
    </div>
    <div class="part5">
      <Acatmap></Acatmap>
    </div>
  </div>
</template>

<script>
import Mynav from "@/components/computer/1MainPage/nav_1"
import Shicha from "@/components/computer/1MainPage/shicha"
import Picwall from "@/components/computer/1MainPage/picwall"
import Acatmap from "@/components/computer/1MainPage/map"
export default {
  name: 'page',
  data () {
    return {
      
    }
  },
  components:{
    Mynav,
    Shicha,
    Picwall,
    Acatmap,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    float: left;
    width: 100%;    
  }
  .part1{
    width: 100%;
    height: 55vw ;
    background-color: rgb(235, 238, 238);

  }
  .part2{
    width: 100%;
    height: 30vw;
    

  }
  .part3{
    width: 100%;
    height: 50vw;
    box-shadow: 0px 0px 15px rgb(0, 0, 0,.9);
        background-color: rgb(235, 238, 238);

  }
  .part4{
    width: 100%;
    height: 50vw;
        background-color: rgb(235, 238, 238);

  }
  .part5{
    width: 100%;
    height: 50vw;
        background-color: rgb(235, 238, 238);


  }
  .pic{
        position: fixed;
        width: 100%;
        height: 60vw;
        background-image: url("../../../assets/shicha/QQ图片20201010174541.jpg");
        background-size: 100% auto;
        z-index: -1;
        background-position: 0 -20vw;
    }
</style>
