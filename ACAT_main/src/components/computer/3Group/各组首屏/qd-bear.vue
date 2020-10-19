<template>
  <div class="main">
    <div class="demo1"></div>
    <div class="demo2"></div>
    <div class="demo3"></div>
    <div class="demo5"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 19vw;
}
.demo1 {
  width: 100%;
  height: 469px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url("../../../../assets/bear/bg3.png") no-repeat;
  opacity: 0.2;
  animation: hill1 50s linear infinite;
}
.demo2 {
  width: 100%;
  height: 269px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url("../../../../assets/bear/bg4.png") no-repeat;
  opacity: 0.6;
  animation: hill2 40s linear infinite;
}
.demo3 {
  width: 100%;
  height: 269px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url("../../../../assets/bear/bg2.png") no-repeat;
  opacity: 1;
  animation: hill3 30s linear infinite;
}

.demo5 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 100px;
  background: url("../../../../assets/bear/bear.png") no-repeat;
  /* 我们元素可以添加多个动画， 用逗号分隔 */
  animation: bear 0.5s steps(8) infinite, move 3s forwards;
}

@keyframes bear {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -1600px 0;
  }
}

@keyframes move {
  0% {
    left: 0;
  }
  100% {
    left: 50%;
    transform: translateX(-50%);
  }
}
@keyframes hill1 {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
}
@keyframes hill2 {
  from {
    background-position: 1400 0;
  }
  to {
    background-position: 100% 0;
  }
}
@keyframes hill3 {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
}
</style>