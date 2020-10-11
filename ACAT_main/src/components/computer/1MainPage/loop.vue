<template>
  <div class="main">
    <ul class="pages">
      <li class="page1" ref="p1"></li>
      <li class="page2" ref="p2"></li>
      <li class="page3" ref="p3"></li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      time: 2000,
      page: 1,
    }
  },
  methods:{
  },
  mounted(){
  }
};
</script>
<style scoped>
.main {
  position: absolute;
  width: 92.9%;
  height: 38vw;
  margin-left: 7vw;
  margin-top: 6vw;
  box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.5);
}
.pages{
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
.page1,.page2,.page3{
    position: absolute;
    list-style: none;
    float: left;
    width: 100%;
    height: 100%;
    background-size: 100% auto;
    animation: page 50s ease-in-out infinite;
}
.page1{
    background-image: url("../../../assets/loop/pic.png");
    z-index: 300;
}
.page2{
    background-image: url("../../../assets/loop/VCG41N613776610.jpg");
    z-index: 200;
}
.page3{
    background-image: url("../../../assets/loop/VCG41N801030524.jpg");
    z-index: 100;
}
@keyframes page{
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }
}

</style>