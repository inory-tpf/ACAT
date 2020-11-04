<template>
  <div>
    <div class="container">
      <div class="swiper-box">
        <swiper :options="swiperOptions" ref="mySwiper">
          <!-- 我是首页 -->
          <swiper-slide class="swiper-slide">
            <div class="slide-item mainPage">
              <transition appear name="main-page-abbr-title">
                <h1 class="main-page-abbr-title">ACAT</h1>
              </transition>
              <transition appear name="main-page-title">
                <h2 class="main-page-title">计算机应用技术协会</h2>
              </transition>
              <p class="main-page-english-title">
                Associetion of Computer Applied Technology
              </p>
              <div class="logo-wrapper">
                <img
                  src="../../assets/mobile/pic.png"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="slide-up-icon"></div>
            </div>
          </swiper-slide>

          <!-- 我是实验室简介页 -->
          <swiper-slide>
            <div class="slide-item brief-wrapper">
              <div class="cat-title-wrapper">
                <div class="cat-title">
                  <div class="cat-title-icon"></div>
                  <div class="cat-title-text">简介</div>
                </div>
              </div>
              <div class="brief-pictrues">
                <div class="brief-pictrues-first"></div>
                <div class="brief-pictrues-second"></div>
                <div class="brief-pictrues-third"></div>
              </div>
              <div class="brief-texts">
                <p class="brief-texts-item brief-texts-first">
                  ACAT计算机应用技术协会是一个由老师创办
                </p>
                <p class="brief-texts-item brief-texts-second">
                  ，学生自主维护的实验室平台。实验室现分为
                </p>
                <p class="brief-texts-item brief-texts-third">
                  前端 、后台、 机器学习、 服务端四大方向。
                </p>
                <p class="brief-texts-item brief-texts-fourth">
                  这里不仅有齐全的基础设施和良好的学习环
                </p>
                <p class="brief-texts-item brief-texts-fifth">
                  境，成员间的关系也十分融洽，是真正意义上友爱互助的“大家庭”。
                </p>
              </div>
              <div class="brief-button-wrapper">
                <a class="brief-button" href="/know"></a>
              </div>
            </div>
          </swiper-slide>

          <!-- 我是照片墙 -->
          <swiper-slide>
            <div class="slide-item pictrueWall">
              <div class="cat-title-wrapper">
                <div class="cat-title">
                  <div class="cat-title-icon"></div>
                  <div class="cat-title-text">实验室时光</div>
                </div>
              </div>
              <div class="pictrueWall-item pictrueWall-item-first">
                <div class="pictrue">
                  <img
                    src="../../assets/mobile/嬉闹流年.jpg"
                    alt="加载中..."
                    width="100%"
                    height="100%"
                  />
                </div>
                <div class="text">
                  <p class="text-item">欢乐时光，只因有你作伴</p>
                </div>
              </div>
              <div class="pictrueWall-item pictrueWall-item-second">
                <div class="text">
                  <p class="text-item">一起进步，共同拼搏</p>
                </div>
                <div class="pictrue">
                  <img
                    src="../../assets/mobile/学习时光.jpg"
                    alt="加载中..."
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
              <div class="pictrueWall-item pictrueWall-item-third">
                <div class="pictrue">
                  <img
                    src="../../assets/mobile/9af3e7d1718ea948c71f7257af57cfd.jpg"
                    alt="加载中..."
                    width="100%"
                    height="100%"
                  />
                </div>
                <div class="text">
                  <p class="text-item">曾经的奋斗，都是值得的</p>
                </div>
              </div>
            </div>
          </swiper-slide>

          <!-- 我是组别分类页 -->
          <swiper-slide>
            <div class="slide-item groups">
              <swiper
                :options="groupsSwiperOptions"
                indicator-active-color="rgba(255,255,255,1)"
              >
                <swiper-slide v-for="(item) in groupList" :key="item.id">
                  <div class="group-wrapper-box">
                    <!-- <div class="group-item-title">
                      <div class="group-item-title-left"></div>
                      {{ item.name }}
                      <div class="group-item-title-right"></div>
                    </div> -->
                    <div class="cat-title-wrapper">
                      <div class="cat-title">
                        <div class="cat-title-icon"></div>
                        <div class="cat-title-text">{{ item.name }}</div>
                      </div>
                    </div>
                    <div class="group-img-wrapper">
                      <img :src="item.logo" width="100%" height="100%" />
                    </div>
                    <p class="group-item-desc">
                      {{item.article}}
                    </p>
                  </div>
                </swiper-slide>
                <div class="groupsSwiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
          </swiper-slide>

          <!-- 我是底栏 -->
          <swiper-slide>
            <div class="slide-item joinUs">
              <div class="joinUs-img">
                <img
                  src="../../assets/mobile/catw.png"
                  width="100%"
                  height="auto"
                />
              </div>
              <div class="joinUs-img">
                <img
                  src="../../assets/mobile/acatw.png"
                  width="100%"
                  height="auto"
                />
              </div>
              <div class="joinUs-name">计算机应用技术协会</div>
              <div class="joinUs-desc">
                <p>地点：西区图书馆一楼</p>
                <p>纳新群号：172566</p>
                <p>微信公众号：ACAT实验室</p>
              </div>
              <div class="code-img-wrapper">
                <img
                  src="../../assets/mobile/20201010222206.jpg"
                  width="40%"
                  height="auto"
                />
                <img
                  src="../../assets/mobile/20201010222206.jpg"
                  width="40%"
                  height="auto"
                />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      swiperOptions: {
        direction: "vertical",
        on: {
          init: () => {
            this.mainPageAmination();
          },
          slideChangeTransitionEnd: () => {
            let swiper = this.$refs.mySwiper.swiper;
            switch (swiper.activeIndex) {
              case 1: {
                this.sketchPageAmination();
                break;
              }
              case 2: {
                this.pictrueWallPageAnimation();
                break;
              }
              default: {
                break;
              }
            }
          },
        },
      },
      // 分页的swiper
      groupsSwiperOptions: {
        effect: "flip",
        pagination: {
          el: ".groupsSwiper-pagination",
          clickable: true,
          type: "progressbar",
          // type: "bullets",
        },
      },
      groupList: [
        {
          name: "前端组",
          id: "1",
          logo: "../../../static/20201010204051.jpg",
          article:
            "前端即网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。随着互联网技术的发展，现代网页更加美观，交互效果显著，功能更加强大。对于前端未来的发展，其可被定义为'人机交互界面'，那就包括随身设备端，语音交互端还有其他机器人智能终端。",
        },

        {
          name: "后台组",
          id: "2",
          logo: "../../../static/3c28cc7029c5bde1ec8826f6b90b444.jpg",
          article:
            "后台(java+golang)，指网站后台，有时也称为网站管理后台，是指用于管理网站前台的一系列操作，如：产品、企业信息的增加、更新、删除等.如果要编写网站后台，比较流行的语言有Java、golang,PHP等等,单纯而言语言各自有各自的优势，针对性不同。后台完成的作品可以称之为网络应用程序，它们可以实现一定的应用功能，也就是说后台人员的工作是编程。",
        },
        {
          name: "机器学习",
          id: "3",
          logo: "../../../static/2a891eb76cf6d3f8526baba87bd716c.jpg",
          article:
            "机器学习,是一门人工智能的科学,该领域的主要研究对象是人工智能，特别是如何在经验学习中改善具体算法的性能.机器学习是对能通过经验自动改进的计算机算法的研究.机器学习是用数据或以往的经验,以此优化计算机程序的性能标准.机器学习是一门多领域交叉学科，涉及概率论、统计学、逼近论、凸分析、算法复杂度理论等多门学科。",
        },
        {
          name: "服务端组",
          id: "4",
          logo: "../../../static/6ff7452f9481c2984f8ac6a6da7fd16.jpg",
          article:
            "服务端,它是为客户端服务的，服务的内容诸如向客户端提供资源，保存客户端数据。服务端可以采用VC++ 或者delphi进行编写，采用socket接口 发送数据到服务器，服务器返回数据 如果OK的话就直接跳转到主界面！服务端是一种有针对性的服务程序。它的主要表现形式以“windows窗口程序”与“控制台”为主。",
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    mainPageAmination() {
      document.getElementsByClassName("logo-wrapper")[0].style.left = "-60px";
    },
    sketchPageAmination() {
      document.getElementsByClassName(
        "brief-pictrues-first"
      )[0].style.transform = "scale(4)";
      document.getElementsByClassName(
        "brief-pictrues-first"
      )[0].style.opacity = 1;
      document.getElementsByClassName(
        "brief-pictrues-second"
      )[0].style.transform = "scale(3.8)";
      document.getElementsByClassName(
        "brief-pictrues-second"
      )[0].style.opacity = 1;
      document.getElementsByClassName(
        "brief-pictrues-third"
      )[0].style.transform = "scale(3.6)";
      document.getElementsByClassName(
        "brief-pictrues-third"
      )[0].style.opacity = 1;

      let texts = document.getElementsByClassName("brief-texts-item");
      Array.prototype.slice.apply(texts).forEach((text) => {
        text.style.opacity = 1;
        text.style.transform = "translateY(0)";
      });
      document.getElementsByClassName(
        "brief-button-wrapper"
      )[0].style.transform = "translateX(0)";
      document.getElementsByClassName(
        "brief-button-wrapper"
      )[0].style.opacity = 1;
    },
    pictrueWallPageAnimation() {
      let picItems = document.querySelectorAll(".pictrueWall-item");
      Array.prototype.slice.call(picItems).forEach((item) => {
        item.style.opacity = 1;
        item.style.transform = "translateY(0vh)";
      });
    },
  },
};
</script>

<style lang="css" scoped>
.swiper-container {
  width: 100vw;
  height: 100vh;
}
.slide-item {
  width: 100%;
  height: 100%;
}

.mainPage {
  background-image: url("../../assets/mobile/VCG211169346737.jpg");
  background-repeat: no-repeat;
}
.sketch {
  /* background-color: rgb(235, 238, 238); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
/* .groups {
  background-image: url("../../assets/VCG41120491036.jpg"); 
  background-color: rgb(235, 238, 238);
}
.pictrueWall {
   background-color: rgb(235, 238, 238); 
}  */
.joinUs {
  background-color: rgb(70, 76, 88);
  padding: 10vw 0;
}

.main-page-title {
  font-size: 10vw;
  color: #fff;
  transform: translateY(30px);
}
.main-page-abbr-title {
  /* 水平阴影的位置 垂直阴影的位置 模糊的距离 阴影的颜色 */
  text-shadow: 2px 2px 2px #fff;
  font-size: 20vw;
  color: #fff;
  transform: translateY(30px);
}
.main-page-english-title {
  font-size: 4.5vw;
  color: #fff;
  transform: translateY(30px);
  opacity: 0;
  animation: text-appear 1s ease 1.5s 1 forwards;
}
.slide-up-icon {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-image: url("../../assets/mobile/向上滑动.png");
  background-size: auto 40px;
  background-repeat: no-repeat;
  background-position: center;
}
.logo-wrapper {
  width: 150px;
  height: 150px;
  position: absolute;
  left: -160px;
  bottom: 100px;
  transform: rotate(45deg);
  transition: left 1s ease-in 2s;
}
@keyframes text-appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* 动画进入 */
.main-page-abbr-title-enter {
  opacity: 0;
  transform: translateY(-20px);
}
/* 过渡期间 */
.main-page-abbr-title-enter-active {
  transition: all 1.5s ease;
}
.main-page-title-enter {
  opacity: 0;
  transform: translateY(90px);
}
.main-page-title-enter-active {
  transition: all 1.5s ease;
}

/* 实验室简介页 */
.brief-wrapper {
  width: 100vw;
  height: 100vh;
}
.cat-title-wrapper {
  height: 35vw;
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
.brief-pictrues {
  position: relative;
  height: 80vw;
}
.brief-pictrues-first {
  position: absolute;
  width: 10vw;
  height: 10vw;
  background-color: rgb(255, 255, 0);
  top: 10vw;
  right: 25vw;
  opacity: 0;
  transform: scale(1);
  transition: all 1s ease 0s;
}
.brief-pictrues-second {
  position: absolute;
  width: 10vw;
  height: 10vw;
  opacity: 0;
  background-color: red;
  top: 15vw;
  right: 60vw;
  transform: scale(1);
  transition: all 1s ease 0.2s;
}
.brief-pictrues-third {
  position: absolute;
  width: 10vw;
  height: 10vw;
  opacity: 0;
  background-color: green;
  top: 43vw;
  right: 30vw;
  transform: scale(1);
  transition: all 1s ease 0.5s;
}
.brief-texts {
  padding: 1vw 5vw;
  font-size: 4.5vw;
  line-height: 7vw;
}
.brief-texts-item {
  opacity: 0;
  transform: translateY(5vw);
  text-align: left;
}
.brief-texts-first {
  transition: all 0.5s linear 1.5s;
}
.brief-texts-second {
  transition: all 0.5s linear 1.7s;
}
.brief-texts-third {
  transition: all 0.5s linear 2s;
}
.brief-texts-fourth {
  transition: all 0.5s linear 2.3s;
}
.brief-texts-fifth {
  transition: all 0.5s linear 2.5s;
}
.brief-button-wrapper {
  width: 25vw;
  height: 15vw;
  position: absolute;
  bottom: 5vh;
  right: 6vw;
  background-image: url("../../assets/mobile/向右手指.svg");
  background-size: 100% 100%;
  text-decoration: none;
  opacity: 0;
  transform: translateX(-200px);
  transition: all 1.5s ease-in-out 3s;
  animation: finger-move 2s ease-in-out 6s infinite;
}
.brief-button {
  display: block;
  width: 100%;
  height: 100%;
}
@keyframes finger-move {
  0%,
  100% {
    right: 6vw;
  }
  25% {
    right: 4vw;
  }
  50% {
    right: 6vw;
  }
  75% {
    right: 4vw;
  }
}

/* 实验室分组页 */
.group-wrapper-box {
  width: 100%;
  height: 100%;
}
.group-img-wrapper {
  width: 100%;
  height: 70vw;
}
.group-item-desc {
  padding: 4vw;
  text-align: left;
  text-indent: 2em;
  line-height: 5vh;
  font-size: 4vw;
  color: #000;
}

/* 实验室时光页 */
.pictrueWall-item {
  box-sizing: border-box;
  height: 22vh;
  padding: 2vw;
  margin-bottom: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transform: translateY(10vh);
  opacity: 0;
}
.pictrueWall-item-first {
  transition: all 0.5s linear 0s;
}
.pictrueWall-item-second {
  transition: all 0.5s linear 0.2s;
}
.pictrueWall-item-third {
  transition: all 0.5s linear 0.5s;
}
.pictrue {
  width: 25vh;
  height: auto;
}
.text {
  box-sizing: border-box;
  position: relative;
  width: 40vw;
  height: 60%;
}
.text-item {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.joinUs-img {
  width: 50vw;
  margin: 0 auto;
}
.code-img-wrapper {
  height: 50vw;
  /* transform: translateY(50vh); */
}
.joinUs-name {
  color: #fff;
  font-size: 8vw;
}
.joinUs-desc {
  /* padding: 5vw 0; */
  width: 70vw;
  margin: 10vw auto;
  text-align: left;
  font-size: 6vw;
  color: #fff;
}
</style>