<template>
  <div class="main">
    <div class="part1"></div>
    <div class="part2"></div>
    <div class="part3"></div>
    <div class="part4"></div>
    <div class="part5"></div>
  </div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    width: 100%;
    background-color: antiquewhite;
  }
  .part1{
    width: 100%;
    height: 50vw ;
  }
  .part2{
    width: 100%;
    height: 30vw;
    background-color: aqua;
  }
  .part3{
    width: 100%;
    height: 50vw;
  }
  .part4{
    width: 100%;
    height: 50vw;
    background-color: aqua;
  }
  .part5{
    width: 100%;
    height: 50vw;

  }
</style>
