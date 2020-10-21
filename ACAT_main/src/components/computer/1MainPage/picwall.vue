<template>
    <div class="main">
        <div class="biaoqian">
            <div class="back">
                <div class="item">照片墙</div>
            </div>
        </div>
        <div class="frame">
            <div class="fontsPlace">
                <div class="font1">匆匆岁月</div>
                <div class="font2">时光剪影</div>
            </div>
            <ul class="picPlace">
                <li class="pic1">1</li>
                <li class="pic2">2</li>
                <li class="pic3">3</li>
                <li class="pic4">4</li>
                <li class="pic5">5</li>
                <li class="pic6">6</li>
                <li class="pic7">7</li>
                <li class="pic8">8</li>
                <li class="pic9">9</li>
                <li class="pic10">10</li>
                <!-- <div class="mengban"></div> -->
            </ul>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.frame {
    overflow: hidden;
    width: 100%;
    height: 40vw;
    margin-top: 1vw;
    box-shadow: 0 0 15px rgb(100, 100, 100);
}
.fontsPlace {
    float: left;
    width: 30%;
    height: 100%;
    background-color: rgb(60, 66, 78);
}
.picPlace {
    float: left;
    width: 70%;
    height: 100%;
    background-color: rgb(60, 66, 78);
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.pic1,
.pic2,
.pic3,
.pic4,
.pic5,
.pic6,
.pic7,
.pic8,
.pic9,
.pic10 {
    float: left;
    width: 20%;
    height: 20%;
    background-color: skyblue;
    list-style: none;
    margin-left: 1%;
    margin-top: 0.5vw;
    box-shadow: 0 0 15px rgb(100, 100, 100);
}
.pic1 {
    height: 45%;
    background-image: url("../../../assets/img/test/IMG_20190421_123546.jpg");
    background-size: 100% auto;
}
.pic6 {
    height: 45%;
    margin-top: -13.7%;
    background-image: url("../../../assets/img/test/IMG_20190421_135405.jpg");
    background-size: auto 100%;
}
.pic4 {
    width: 15%;
    height: 45%;
    background-image: url("../../../assets/img/test/IMG_20191020_205855.jpg");
    background-size: auto 100%;
}
.pic3 {
    width: 40%;
    height: 45%;
    background-image: url("../../../assets/img/test/IMG_20191028_195020.jpg");
    background-size: 100% auto;
}
.pic7 {
    width: 15%;
    height: 51.1%;
    background-image: url("../../../assets/img/test/IMG_20191214_204942.jpg");
    background-size: auto 100%;
}
.pic8 {
    width: 40%;
    height: 25%;
    background-image: url("../../../assets/img/test/IMG_20191214_213313.jpg");
    background-size: 100% auto;
    background-position: 0 30%;
}
.pic9 {
    width: 40%;
    height: 25%;
    background-image: url("../../../assets/img/test/wx_camera_1572790631800.jpg");
    background-size: 100% auto;
    background-position: 0 50%;
}
.pic10 {
    width: 41%;
    height: 29.7%;
    margin-top: -17.3%;
    background-image: url("../../../assets/img/test/IMG_20191214_205044.jpg");
    background-size: 100% auto;
    background-position: 0 20%;
}
.pic5 {
    background-image: url("../../../assets/img/test/Screenshot_2019-11-11-12-27-37-411_com.tencent.mo.jpg");
    background-size: 100% auto;
    background-position: 0 50%;
}
.pic2 {
    background-image: url("../../../assets/img/视差/QQ图片20201010174541.jpg");
    background-size: 100% auto;
    background-position: 0 40%;
}
@keyframes group1 {
    from {
        transform: rotateX(0deg);
    }
    to {
        transform: rotateX(180deg);
    }
}
.mengban {
    position: absolute;
    width: 70%;
    height: 40vw;
    background-color: rgb(0, 0, 0);
    opacity: .2;
}
.biaoqian {
  position: relative;
  width: 100%;
  height: 8vw;
}
.back {
  position: absolute;
  width: 15vw;
  height: 3vw;
  background-color: rgb(60, 66, 78);
  bottom: 2vw;
    box-shadow: 0 0 15px rgb(100, 100, 100);
  left: 50%;
  margin-left: -7.5vw;
}
.item {
  width: 100%;
  height: 100%;
  background-color: rgb(95, 177, 159);
  margin-left: 1vw;
  margin-top: 1vw;
  color: #fff;
  font-size: 1.5vw;
  font-weight: 600;
  line-height: 3vw;
  letter-spacing: 0.3vw;
    box-shadow: 0 0 15px rgb(100, 100, 100);
}
.font1,.font2{
    float: left;
    width: 4vw;
    height: 20vw;
    font-size: 2.6vw;
    font-weight: 600;
    color:rgb(255,255,255);
    margin-left: 8vw;
    margin-top: 8vw;
    opacity: .8;
}
.font2{
    margin-left: 2vw;
}
</style>