<template>
    <div class="main">
        <div class="left">
            <div class="label-fonts">实验室主要成果</div>
            <div class="achpic1"></div>
            <div class="achname">学校选课系统</div>
            <div class="achfonts">
                这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字
            </div>
        </div>
        <div class="right">
            <div class="rongyu">
                <div class="ryfont">实验室获得荣誉</div>
                <div class="rypic"></div>
                <div class="ryfonts">
                    协会成员共参与校级开放实验3项、院级开放实验6项；申报了10项大学生创新创业训练计划项目，其中4项获批为国家级、6项获批为省级；教师申报教改和科研项目7项，带领学生组队在多项科技竞赛中获得了优异的成绩。
                </div>
            </div>
            <div class="chengyuan">
                <div class="cyfont">实验室成员</div>
                <div class="cypic"></div>
                <div class="cyfonts">
                    经过这几年的不断积累和沉淀，协会采取召开纳新宣讲会、技术分享公开课等形式，吸纳着各年级、各专业勤奋好学的学生，逐步建立起了一支以高年级学生为骨干，低年级学生为主体的阶梯团队。已毕业学生签约成功率为100%，均入职于京东、腾讯、阿里巴巴、大众点评等知名互联网公司。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            x: 0,
        };
    },
    methods: {
        // move(e) {
        //     this.$refs.frame.style.marginLeft = 0.001 * e.clientX + "vw";
        //     this.$refs.frame.style.marginTop = 0.001 * e.clientY + "vw";
        //     this.$refs.pic.style.marginLeft = 2 + 0.0007 * e.clientX + "vw";
        //     this.$refs.pic.style.marginTop = 2 + 0.0007 * e.clientY + "vw";
        // },
    },
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.left {
    float: left;
    width: 30%;
    height: 100%;
    margin-left: 10vw;
}
.right {
    float: left;
    width: 53%;
    height: 100%;
    margin-left: 4vw;
}
.label-fonts,
.ryfont,
.cyfont {
    width: 15vw;
    height: 3vw;
    margin-top:20vh;
    color: rgb(95, 177, 159);
    font-weight: 600;
    font-size: 2vw;
    text-align: left;
    clear: both;
}
.cyfont {
    margin-top: 15vw;
}
.ryfonts,
.cyfonts {
    float: left;
    width: 50%;
    height: 13vw;
    margin-left: 4%;
    color: #464c58;
    font-size: 1.5vw;
    font-weight: 400;
    text-align: left;

    text-indent: 3vw;
}
.ryfonts {
    clear: right;
}
.cyfonts {
    float: left;
    width: 35vw;
}
.achpic1 {
    width: 90%;
    height: 15vw;
    border: 0.3vw solid #464c58;
    background-image: url("");
    background-size: 100% auto;
    margin-top: 0.5vw;
}
.rypic,
.cypic {
    float: left;
    width: 40%;
    height: 12vw;
    background-color: rgb(95, 177, 159);
    border: 0.3vw solid #464c58;
    background-image: url("../../../assets/img/了解我们/荣誉.jpg");
    background-size: 100% auto;
    background-position: 0 -2.5vw;
}
.cypic {
    width: 12vw;
    height: 12vw;
    background-image: url("../../../assets/img/logo/pic.png");
    background-size: 100% auto;
    background-position: 0 0 ;
}
.achname {
    width: 100%;
    height: 3vw;
    text-align: left;
    color: rgb(95, 177, 159);
    font-weight: 500;
    font-size: 1.7vw;
    line-height: 3vw;
    margin-top: 0.5vw;
}
.achfonts {
    width: 90%;
    height: 20vw;
    color: #464c58;
    font-size: 1.5vw;
    font-weight: 400;
    text-align: left;
    text-indent: 3vw;
    margin-top: 0.5vw;
}
/* .box1 {
    position: absolute;
    width: 10vw;
    height: 10vw;
    margin-left: 10vw;
    margin-top: 10vw;
    transition: ease-in-out;
}
.frame {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(95, 177, 159);
    transition: ease-in-out;
        box-shadow: 0 0 10px rgb(60, 60, 60);

}
.pic1 {
    position: absolute;
    width: 40vw;
    height: 30vw;
    background-color: rgb(70, 76, 88);
    margin-left: 2vw;
    margin-top: 2vw;
    box-shadow: 0 0 10px rgb(60, 60, 60);
} */
</style>