<template>
  <div class="main">
      <div class="fonts">
          <div class="bigfonts1">{{msg.title1}}</div>
          <div class="bigfonts2">{{msg.title2}}</div>
      </div>
      <bear v-if="msg.id==1"></bear>
      <java v-if="msg.title1 == 'JAVA'"></java>
  </div>
</template>

<script>
import bear from "../各组首屏/qd-bear"
import java from "../各组首屏/java"
export default {
    data(){
        return{

        }
    },
    components:{
        bear,
        java,
    },
    props:['msg']
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