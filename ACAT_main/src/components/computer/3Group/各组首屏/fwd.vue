<template>
  <div class="main">
       <div class="fonts">
          <div class="bigfonts1">{{msg.title1}}</div>
          <div class="bigfonts2">{{msg.title2}}</div>
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
.fonts{
        position: absolute;
        width: 60vw;
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