<template>
    <div class="main">
        <div class="pic-block">
            <div class="biaoqian">
                <div class="bqfont" :class="{ active: animation }">
                    实验室指导老师
                </div>
            </div>
            <div class="mainbox"  :class="{ active2: animation }">
                <div class="picbox">
                    <div class="pic1">
                        <img
                            src="../../../assets/img/了解我们/指导老师/余俊.png"
                        />
                    </div>
                    <div class="name">余俊</div>
                    <!-- <div class="jieshao">这里是文字这里是文字这里是文字</div> -->
                </div>
                <div class="picbox">
                    <div class="pic1">
                        <img
                            src="../../../assets/img/了解我们/指导老师/李培.png"
                        />
                    </div>
                    <div class="name">李培</div>
                    <!-- <div class="jieshao">这里是文字这里是文字这里是文字</div> -->
                </div>
                <div class="picbox">
                    <div class="pic1">
                        <img
                            src="../../../assets/img/了解我们/指导老师/白琳.png"
                        />
                    </div>
                    <div class="name">白琳</div>
                    <!-- <div class="jieshao">这里是文字这里是文字这里是文字</div> -->
                </div>
                <div class="picbox left">
                    <div class="pic1">
                        <img
                            src="../../../assets/img/了解我们/指导老师/牛晓晨.png"
                        />
                    </div>
                    <div class="name">牛晓晨</div>
                    <!-- <div class="jieshao">这里是文字这里是文字这里是文字</div> -->
                </div>
                <div class="picbox">
                    <div class="pic1">
                        <img
                            src="../../../assets/img/了解我们/指导老师/孙家泽.png"
                        />
                    </div>
                    <div class="name">孙家泽</div>
                    <!-- <div class="jieshao">这里是文字这里是文字这里是文字</div> -->
                </div>
            </div>
        </div>
        <div class="fonts-block" :class="{ active4: animation }">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="block" :class="{ active3: animation }">
                <div class="head">
                    <div class="head-pic"></div>
                </div>
                <div class="fonts">
                    自2014年创立之初发展至今。协会始终着眼于未来蓬勃的计算机互联网应月技术服务领域，结合开放实验的进行、科研项目的完成、相关科技竞赛的参与等实践活动。以项目为驱动之源，打牢技术理论基础，锤炼实践动手能力，培养学生分析解决实际问题的综合能力。
                </div>
            </div>
        </div>
        <!-- <div class="angle">
            <div class="logo"></div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            animation: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.animation = true;
        }, 200);
    },
};
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
    opacity: 0;
    transition: .5s .8s ease-in-out;
}
.active4{
    opacity: 1;
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
    position: absolute;
    width: 30vw;
    height: 41vw;
    background-color: rgb(70, 76, 88);
    margin-top: 0vw;
    overflow: hidden;
    box-shadow: 0 0 15px rgb(70, 70, 70);
    transition: .5s .8s ease-in-out;
    z-index: 99;
}
.active3{
    margin-top: 7vw;
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
    background-image: url("../../../assets/img/了解我们/简介.jpg");
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
img {
    width: 100%;
    height: auto;
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
    margin-top: 15vh;
    box-shadow: 0 0 15px rgb(70, 70, 70);
}
.bqfont {
    width: 100%;
    height: 100%;
    background-color: rgb(95, 177, 159);
    color: #fff;
    font-size: 1.7vw;
    font-weight: 600;
    line-height: 4vw;
    box-shadow: 0 0 15px rgb(70, 70, 70);
    transition: .5s ease-in-out;
}
.active {
    margin-top: 1vw;
    margin-left: 1vw;
}
.picbox {
    float: left;
    width: 30%;
    height: 14vw;
    margin-left: 3%;
}
.left {
    margin-left: 10vw;
}
.mainbox {
    width: 100%;
    height: 100%;
    margin-top: 35vh;
    transition:  .5s .4s ease-in-out;
    opacity: 0;
}
.active2{
    opacity: 1;
}
.pic1 {
    width: 10vw;
    height: 10vw;
    background-image: url("../../../assets/img/logo/pic.png");
    background-size: 100% auto;
    border-radius: 50%;
    border: 0.3vw solid rgb(70, 76, 88);
    margin: 0 auto;
    overflow: hidden;
}
.name {
    margin-top: 0.7vw;
    font-size: 1.7vw;
    font-weight: 600;
    color: rgb(95, 177, 159);
    letter-spacing: 0.5vw;
    text-align: center;
    margin-left: 0.3vw;
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