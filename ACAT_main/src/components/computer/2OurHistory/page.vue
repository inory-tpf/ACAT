<template>
  <div class="main">
    <nav2 class="nav2"></nav2>
    <lists class="lists" :page = "page"></lists>
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="example">
        <div class="page color"></div>
        <div class="page color2"></div>
        <div class="page color3"></div>
        <div class="page color2"></div>
      </div>
    </div>
  </div>
</template>
<script>
import nav2 from "../public/nav_2";
import lists from "./lists"
export default {
  data() {
    return {
      opts: {
        start: 0,
        dir: "v",
        duration: 300,
        page:0,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
            this.opts.page = next
        },
      },
      page:0,
    };
  },
  methods: {
    moveNext() {
      this.$refs.example.$fullpage.moveNext(); //Move to the next page
    },
    move(value){
        this.$refs.example.$fullpage.moveTo(value)
        this.opts.page = value
    },
  },
  components: {
    nav2,
    lists,
  },
  watch:{
      "opts.page":{
          handler:function() {
            this.page = this.opts.page
            console.log(this.page)
          },
          deep:true,
          immediate:true,
      }
  }
};
</script>

<style>
.main {
  width: 100%;
  height: 100vh;
}
.nav2 {
  position: fixed;
  z-index: 99;
}
.lists{
    position: fixed;
    z-index: 99;
}
.page-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.color {
  background-color:rgb(235, 238, 238);
;
}
.color2 {
  background-color: springgreen;
}
.color3 {
  background-color: steelblue;
}
</style>