<template>
  <div class="main">
    <nav2 class="nav2"></nav2>
    <lists class="lists" :page="page"></lists>
    <div class="title-line">
      <div class="fonts">{{ fonts[page] }}</div>
    </div>
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="example">
        <div class="page color">
          <history></history>
        </div>
        <div class="page color"></div>
        <div class="page color"></div>
        <div class="page color"></div>
      </div>
    </div>
  </div>
</template>
<script>
import nav2 from "../public/nav_2";
import lists from "./lists";
import before from "./before";
import history from './history'
export default {
  data() {
    return {
      opts: {
        start: 0,
        dir: "v",
        duration: 300,
        page: 0,
        beforeChange: function (prev, next) {},
        afterChange: function (prev, next) {
          this.opts.page = next;
        },
      },
      page: 0,
      fonts: ["ACAT的创始", "实验室成就", "实验室设施", "加入我们吧"],
    };
  },
  methods: {
    moveNext() {
      this.$refs.example.$fullpage.moveNext(); //Move to the next page
    },
    move(value) {
      this.$refs.example.$fullpage.moveTo(value);
      this.opts.page = value;
    },
  },
  components: {
    nav2,
    lists,
    before,
    history,
  },
  watch: {
    "opts.page": {
      handler: function () {
        this.page = this.opts.page;
        console.log(this.page);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
}
.nav2 {
  position: fixed;
  z-index: 99;
}
.lists {
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
  background-color: rgb(235, 238, 238);
}
.color2 {
  background-color: springgreen;
}
.color3 {
  background-color: steelblue;
}
.title-line {
  position: absolute;
  width: .2vw;
  height: 30vw;
  z-index: 99;
  background-color: rgb(60, 66, 78, 0.8);
  margin-left: 4vw;
  margin-top: 12vw;
}
.fonts {
  position: absolute;
  width: 2vw;
  height: 60%;
  background-color: rgb(235, 238, 238);
  margin-top: 6.5vw;
  margin-left: -0.8vw;
  color: rgb(60, 66, 78, 0.8);
  font-size: 2vw;
  line-height: 2vw;
  letter-spacing: 0.7vw;
  font-weight: 600;
  writing-mode: vertical-lr;
  text-align: center;
}
</style>