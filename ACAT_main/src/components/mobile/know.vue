<template>
  <div>
    <!-- 实验室历史 -->
    <div class="history-wrapper">
      <div class="cat-title-wrapper">
        <div class="cat-title">
          <div class="cat-title-icon"></div>
          <div class="cat-title-text">实验室历史</div>
        </div>
      </div>
      <div class="text-content">
        自2014年创立之初发展至今。协会始终着眼于未来蓬勃的计算机互联网应月技术服务领域，
        结合开放实验的进行、科研项目的完成、创新项目的申报、相关科技竞赛的参与等实践活动，
        以项目为驱动之源，打牢技术理论基础，锤炼实践动手能力，培养学生发现、分析和解决实际问题的综合素质能力，
        使学生具备一定创新精神和实践能力，进一步提高学生的创业、就业竞争力。
      </div>
    </div>

    <!-- 实验室成就 -->
    <div>
      <div class="cat-title-wrapper">
        <div class="cat-title">
          <div class="cat-title-icon"></div>
          <div class="cat-title-text">实验室成就</div>
        </div>
      </div>
      <div class="text-content">
        协会成员共参与校级开放实验3项、院级开放实验6项；
        申报了10项大学生创新创业训练计划项目，其中4项获批为国家级、6项获批为省级；
        教师申报教改和科研项目7项，带领学生组队在多项科技竞赛中均获得了优异的成绩。
      </div>

      <div class="achievement-wrapper">
        <div class="achievement-pic1 achievement-pic"></div>
        <div class="achievement-pic2 achievement-pic"></div>
        <div class="achievement-pic3 achievement-pic"></div>
      </div>
    </div>

    <!-- 实验室指导老师 -->
    <div class="teacher-introduce">
      <div class="cat-title-wrapper">
        <div class="cat-title">
          <div class="cat-title-icon"></div>
          <div class="cat-title-text">实验室老师</div>
        </div>
      </div>
      <div class="teacher-item">
        <div class="teacher-pic">
          <img
            src="../../assets/mobile/92c1b3f4d530da14a86669f855bccd6.png"
            alt="加载中..."
            width="100%"
            height="100%"
          />
        </div>
        <div class="teacher-desc">
          <p class="teacher-name">余浚老师</p>
        </div>
      </div>
      <div class="teacher-item">
        <div class="teacher-pic-even">
          <img
            src="../../assets/mobile/92c1b3f4d530da14a86669f855bccd6.png"
            alt="加载中..."
            width="100%"
            height="100%"
          />
        </div>
        <div class="teacher-desc-even">
          <p class="teacher-name">孙家泽老师</p>
        </div>
      </div>
      <div class="teacher-item">
        <div class="teacher-pic">
          <img
            src="../../assets/mobile/a4269598ec9c0d59bd42322df5ad109.png"
            alt="加载中..."
            width="100%"
            height="100%"
          />
        </div>
        <div class="teacher-desc"><p class="teacher-name">李培老师</p></div>
      </div>
      <div class="teacher-item">
        <div class="teacher-pic-even">
          <img
            src="../../assets/mobile/dd3e1ffbb8af22b0f0ff9c3b780a838.png"
            alt="加载中..."
            width="100%"
            height="100%"
          />
        </div>
        <div class="teacher-desc-even">
          <p class="teacher-name">白琳老师</p>
        </div>
      </div>
      <div class="teacher-item">
        <div class="teacher-pic">
          <img
            src="../../assets/mobile/8150d63cacddf0907460670f2fd955d.png"
            alt="加载中..."
            width="100%"
            height="100%"
          />
        </div>
        <div class="teacher-desc"><p class="teacher-name">牛晓晨老师</p></div>
      </div>
    </div>

    <!-- 实验室学习方式 -->
    <div class="learn-way-wrapper">
      <div class="cat-title-wrapper">
        <div class="cat-title">
          <div class="cat-title-icon"></div>
          <div class="cat-title-text">学习方式</div>
        </div>
      </div>
      <!-- 视觉差效果 -->
      <div class="parallax-wrapper">
        <img
          src="../../assets/mobile/微信图片_20201028161919.jpg"
          class="img-parallax"
          width="100vw"
          height="auto"
        />
      </div>
      <div class="text-content">
        协会主要以学生自学为主，教师指导为辅，提倡学生之间的相互帮扶，采用多层次阶梯型培养、规章制度约束、
        骨干负责的方式维持协会日常运行。通过组织校企联合培养，完成开放实验，申报大学生创新创业训练项目，
        跟进教师科研项目，参与计算机类科技竞赛等方式方法，积极学习各类计算机应用技术。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    parallaxImg() {
      let that = window;
      var img = document.getElementsByClassName("img-parallax")[0];
      var imgWrapper = img.parentNode;
      var speed = 1;
      var imgY = imgWrapper.offsetTop; // 获取图片盒子所在的Y位置
      var winY = that.scrollY; // 获取当前滑动到的位置
      var winH = that.innerHeight; // 获取浏览器窗口高度
      var parentH = imgWrapper.offsetHeight; // 获取图片盒子的高度
      // 浏览器窗口底部的所在位置
      var winBottom = winY + winH;
      if (winBottom > imgY && winY < imgY + parentH) {
        var imgBottom = (winBottom - imgY) * speed;
        var imgTop = winH + parentH;
        var imgPercent = (imgBottom / imgTop) * 100 + (50 - speed * 50);
      }
      img.style.top = imgPercent + "%";
      img.style.transform = "translate(-50%, -" + imgPercent + "%)";
    },

    executeAnimation() {
      this.parallaxImg();
    },
  },
  mounted() {
    window.addEventListener("scroll", this.executeAnimation, true);
  },
};
</script>

<style lang="css" scoped>
.text-content {
  font-size: 5vw;
  line-height: 8vw;
  text-align: left;
  text-indent: 2em;
  padding: 0vh 2vw;
}
.cat-title-wrapper {
  height: 35vw;
  position: relative;
}
.cat-title-text {
  width: 40vw;
  height: 15vw;
  background-color: rgb(70, 76, 88);
  box-shadow: -5vw -3vw 0vw rgb(95, 177, 159);
  color: #fff;
  text-shadow: -0vw -0vw 1vw #fff;
  text-align: center;
  line-height: 15vw;
  font-size: 7vw;
  position: absolute;
  left: 50%;
  top: 5vw;
  transform: translate(-50%, 5vw);
}
.teacher-item {
  height: 40vw;
  position: relative;
  padding: 2vh;
}
.teacher-pic {
  height: 40vw;
  width: 40vw;
  overflow: hidden;
  border-radius: 50%;
  position: absolute;
  right: 5vw;
  top: 0;
}
.teacher-pic-even {
  height: 40vw;
  width: 40vw;
  overflow: hidden;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 5vw;
}

.teacher-desc {
  height: 35vw;
  line-height: 35vw;
  padding: 10vw 0;
  width: 35vw;
  overflow: hidden;
  position: absolute;
  left: 5vw;
  top: 0;
  background-color: rgb(255, 255, 255);
}
.teacher-desc-even {
  height: 35vw;
  padding: 10vw 0;
  line-height: 35vw;
  width: 35vw;
  overflow: hidden;
  position: absolute;
  right: 5vw;
  top: 0;
  background-color: rgb(255, 255, 255);
}
.teacher-name {
  height: 15vw;
  line-height: 15vw;
  border-bottom: 1px solid #000;
}

.parallax-wrapper {
  width: 100%;
  height: 70vw;
  position: relative;
  overflow: hidden;
  margin-bottom: 5vh;
}
.img-parallax {
  width: 100vmax;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  pointer-events: none;
}

.achievement-wrapper {
  height: 80vw;
  position: relative;
}

.achievement-pic1 {
  width: 45vw;
  height: 55vw;
  position: absolute;
  left: 5vw;
  top: 10vw;
  background-color: aqua;
  background-image: url("../../assets/mobile/9af3e7d1718ea948c71f7257af57cfd.jpg");
  background-size: auto 55vw;
  background-repeat: no-repeat;
}
.achievement-pic2 {
  width: 30vw;
  height: 30vw;
  position: absolute;
  right: 10vw;
  top: 5vw;
  background-color: rgb(107, 252, 50);
  background-image: url("../../assets/mobile/图片1.jpg");
  background-size: auto 30vw;
  background-repeat: no-repeat;
}
.achievement-pic3 {
  width: 38vw;
  height: 30vw;
  position: absolute;
  right: 20px;
  bottom: 5vw;
  background-image: url("../../assets/mobile/714258bc4ea1f9200b5a1405d8bc84a.png");
  background-size: auto 38vw;
  background-repeat: no-repeat;
}
</style>