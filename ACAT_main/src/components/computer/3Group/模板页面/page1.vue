<template>
  <div class="main">
      <div class="picbox">
        <div  class="pic">
          <img :src="msg.pic1" />
        </div>
      </div>
      <div class="fonts">
        <div class="bigfonts">{{msg.title1}}是什么</div>
        <div class="smallfonts" v-html="msg.font1"></div>
      </div>
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
  display: inline-block;
  width: 100%;
  height: 100%;
}
  .picbox{
    position: absolute;;
    width: 25vw;
    height: 33vw;
    background-color:  rgb(95, 177, 159);
    margin-top: 19vh;
    margin-left: 15vw;
    box-shadow: 0 0 15px rgb(70, 70, 70);
  }
  .pic{
    width: 100%;
    height: 100%;
    margin-left: 1.5vw;
    margin-top: 1.5vw;
    box-shadow: 0 0 15px rgb(70, 70, 70);
    overflow: hidden;;

  }
  img{
    width: 100%;
    height: auto;
  }
  .fonts{
    width: 40vw;
    height: 30vw;
    margin-left: 50vw;
    margin-top: 27vh;
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
    text-align: left;
    line-height: 2.3vw;
    letter-spacing: .17vw;

  }
</style>