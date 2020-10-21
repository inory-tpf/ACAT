<template>
    <div class="main">
        <div class="pic-block">
            <div class="biaoqian">
                <div class="bqfont">实验室创始人</div>
            </div>
            <div class="picbox">
                <div class="pic1"></div>
                <div class="name">name</div>
                <div class="jieshao">这里是文字这里是文字这里是文字</div>
            </div>
            <div class="picbox">
                <div class="pic1"></div>
                <div class="name">name</div>
                <div class="jieshao">这里是文字这里是文字这里是文字</div>
            </div>
            <div class="picbox">
                <div class="pic1"></div>
                <div class="name">name</div>
                <div class="jieshao">这里是文字这里是文字这里是文字</div>
            </div>
        </div>
        <div class="fonts-block">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="block">
                <div class="head">
                    <div class="head-pic"></div>
                </div>
                <div class="fonts">
                    这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字
                </div>
            </div>
        </div>
        <!-- <div class="angle">
            <div class="logo"></div>
        </div> -->
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
}
.fonts-block {
    float: left;
    width: 30%;
    height: 50vw;
    margin-left: 4vw;
}
.line1,
.line2 {
    float: left;
    width: 0.2vw;
    height: 7vw;
    background-color: rgb(22, 22, 22);
    margin-left: 5vw;
    opacity: 0.8;
}
.line2 {
    margin-left: 20vw;
}
.block {
    width: 30vw;
    height: 40vw;
    background-color: rgb(70, 76, 88);
    margin-top: 7vw;
    overflow: hidden;
    box-shadow: 0 0 15px rgb(70, 70, 70);
}
.head {
    float: left;
    width: 80%;
    height: 30%;
    margin-left: 5%;
    margin-top: 5%;
    background-color: rgb(95, 177, 159);
}
.head-pic {
    width: 100%;
    height: 100%;
    background-image: url("../../../assets/img/test/Screenshot_2019-11-11-12-27-37-411_com.tencent.mo.jpg");
    background-size: 100% auto;
    background-position: 0 45%;
    margin-left: 6%;
    margin-top: 5%;
    box-shadow: 0 0 15px rgb(70, 70, 70);
}
.fonts {
    width: 80%;
    margin-top: 53%;
    margin-left: 6%;
    font-size: 1.55vw;
    color: rgb(255, 255, 255);
    text-indent: 3vw;
    line-height: 2.5vw;
    letter-spacing: 0.15vw;
    text-align: left;
    background-color: rgb(75, 81, 93);
    border: 1vw solid rgb(75, 81, 93);
    border-radius: 5px;
    box-shadow: 0 0 15px rgb(70, 70, 70);
    opacity: 0.9;
}
.pic-block {
    float: left;
    width: 50vw;
    height: 100%;
    margin-left: 10vw;
}
.biaoqian {
    position: absolute;
    width: 15vw;
    height: 4vw;
    background-color: rgb(70, 76, 88);
    margin-top: 10vw;
    box-shadow: 0 0 15px rgb(70, 70, 70);
}
.bqfont {
    width: 100%;
    height: 100%;
    background-color: rgb(95, 177, 159);
    margin-top: 1vw;
    margin-left: 1vw;
    color: #fff;
    font-size: 1.7vw;
    font-weight: 600;
    line-height: 4vw;
    box-shadow: 0 0 15px rgb(70, 70, 70);
}
.picbox {
    float: left;
    width: 30%;
    height: 22vw;
    margin-left: 3%;
    margin-top: 19vw;
}
.pic1 {
    width: 10vw;
    height: 10vw;
    background-image: url("../../../assets/img/logo/pic.png");
    background-size: 100% auto;
    border-radius: 50%;
    border: 0.3vw solid rgb(70, 76, 88);
    margin: 0 auto;
}
.name {
    margin-top: 0.7vw;
    font-size: 1.7vw;
    font-weight: 600;
    color: rgb(95, 177, 159);
}
.jieshao {
    width: 80%;
    margin-left: 10%;
    margin-top: 0.7vw;
}
.angle {
    position: absolute;
    width: 20vw;
    height: 20vw;
    background-color: rgb(70, 76, 88);
    right: -10vw;
    bottom: -10vw;
    transform: rotateZ(45deg);
    box-shadow: 0 0 15px rgb(70, 70, 70);
}
.logo {
    width: 8vw;
    height: 8vw;
    background-image: url("../../../assets/img/logo/catw.png");
    background-size: 100% 100%;
    transform: rotateZ(-45deg);
    margin-top: 6vw;
}
</style>