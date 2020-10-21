<template>
    <div class="main">
        <div class="part3">
            <div class="biaoqian">
                <div class="back">
                    <div class="item">组别简介</div>
                </div>
            </div>
            <div class="background" ref="background"></div>

            <div class="left">
                <ul class="classify">
                    <li
                        @mouseover="change(0)"
                        @mouseout="Unchange()"
                        @click="toLink(0)"
                        class="classifyJ"
                        ref="li1"
                        :class="{active:id==0}"
                    >
                        <img :src="classifyList[0].classifyImg" />
                        <div class="classifyWord">
                            {{ classifyList[0].classifyWord }}
                        </div>
                    </li>
                    <li
                        @mouseover="change(1)"
                        @mouseout="Unchange()"
                        @click="toLink(1)"
                        class="classifyJ color2"
                        ref="li2"
                        :class="{active:id==1}"
                    >
                        <img :src="classifyList[1].classifyImg" />
                        <div class="classifyWord">
                            {{ classifyList[1].classifyWord }}
                        </div>
                    </li>
                    <li
                        @mouseover="change(2)"
                        @mouseout="Unchange()"
                        @click="toLink(2)"
                        class="classifyJ color3"
                        ref="li3"
                        :class="{active:id==2}"
                    >
                        <img :src="classifyList[2].classifyImg" />
                        <div class="classifyWord">
                            {{ classifyList[2].classifyWord }}
                        </div>
                    </li>
                    <li
                        @mouseover="change(3)"
                        @mouseout="Unchange()"
                        @click="toLink(3)"
                        class="classifyJ color4"
                        ref="li4"
                        :class="{active:id==3}"
                    >
                        <img :src="classifyList[3].classifyImg" />
                        <div class="classifyWord">
                            {{ classifyList[3].classifyWord }}
                        </div>
                    </li>
                </ul>
                <div class="introduceWord">{{ introduceWord }}</div>
            </div>
            <div class="right">
                <div class="introducePic">
                    <img :src="introducePic" :alt="introduceAlt" />
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
    name: "page",
    data() {
        return {
            classifyList: [
                {
                    classifyImg: require("../../../assets/img/组别/简介/classifyWeb.png"),
                    classifyWord: "前端",
                },
                {
                    classifyImg: require("../../../assets/img/组别/简介/classifyBackstage.png"),
                    classifyWord: "后台",
                },
                {
                    classifyImg: require("../../../assets/img/组别/简介/classifyMachineLearning.png"),
                    classifyWord: "机器学习",
                },
                {
                    classifyImg: require("../../../assets/img/组别/简介/classifyServer.png"),
                    classifyWord: "服务端",
                },
            ],
            introduceWord: "",
            introducePic: "",
            introduceAlt: "",
            introduceWordList: [
                `前端即网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。随着互联网技术的发展，现代网页更加美观，交互效果显著，功能更加强大。对于前端未来的发展，其可被定义为"人机交互界面"，那就包括随身设备端，语音交互端还有其他机器人智能终端。`,
                "后台(java+golang)，指网站后台，有时也称为网站管理后台，是指用于管理网站前台的一系列操作，如：产品、企业信息的增加、更新、删除等.如果要编写网站后台，比较流行的语言有Java、golang,PHP等等,单纯而言语言各自有各自的优势，针对性不同。后台完成的作品可以称之为网络应用程序，它们可以实现一定的应用功能，也就是说后台人员的工作是编程。",
                "机器学习,是一门人工智能的科学,该领域的主要研究对象是人工智能，特别是如何在经验学习中改善具体算法的性能.机器学习是对能通过经验自动改进的计算机算法的研究.机器学习是用数据或以往的经验,以此优化计算机程序的性能标准.机器学习是一门多领域交叉学科，涉及概率论、统计学、逼近论、凸分析、算法复杂度理论等多门学科。",
                "服务端,它是为客户端服务的，服务的内容诸如向客户端提供资源，保存客户端数据。服务端可以采用VC++ 或者delphi进行编写，采用socket接口 发送数据到服务器，服务器返回数据 如果OK的话就直接跳转到主界面！服务端是一种有针对性的服务程序。它的主要表现形式以“windows窗口程序”与“控制台”为主。",
            ],
            introducePicList: [
                require("../../../assets/img/组别/简介/前端.jpg"),
                require("../../../assets/img/组别/简介/后台.jpg"),
                require("../../../assets/img/组别/简介/机器学习.jpg"),
                require("../../../assets/img/组别/简介/服务端.jpg"),
            ],
            introduceAltList: ["前端", "后台", "机器学习", "服务端"],
            id: 0,
            time: "",
        };
    },
    methods: {
        change(index) {
            this.id = index;
            clearInterval(this.time);
            this.introduceWord = this.introduceWordList[index];
            this.introducePic = this.introducePicList[index];
            this.introduceAlt = this.introduceAltList[index];
        },
        Unchange() {
            this.gif();
        },
        toLink(index) {
            console.log(index);
        },
        gif() {
            this.time = setInterval(() => {
                if (this.id === this.introduceWordList.length - 1) {
                    this.id = 0;
                    this.introduceWord = this.introduceWordList[this.id];
                    this.introducePic = this.introducePicList[this.id];
                    this.introduceAlt = this.introduceAltList[this.id];
                } else {
                    this.id += 1;
                    this.introduceWord = this.introduceWordList[this.id];
                    this.introducePic = this.introducePicList[this.id];
                    this.introduceAlt = this.introduceAltList[this.id];
                }
            }, 5000);
        },
    },
    created() {
        this.introduceWord = this.introduceWordList[0];
        this.introducePic = this.introducePicList[0];
        this.introduceAlt = this.introduceAltList[0];
        this.gif();
    },
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}

.part3 {
    position: relative;
    width: 100%;
    height: 50vw;
    z-index: 99;
    overflow: hidden;
}
.left {
    position: relative;
    width: 35vw;
    float: left;
    margin-left: 16vw;
    padding: 0;
    z-index: 99;
}
.classify {
    height: 18vw;
    width: 100%;
    padding: 0;
    margin: 0;
}
.classifyJ {
    position: relative;
    height: 80%;
    width: 6vw;
    border-radius: 10px;
    float: left;
    font-size: 1.2vw;
    font-weight: 600;
    background-size: cover;
    text-align: center;
    list-style: none;
    background-color: #7bdcfe;
    margin-top: 2vw;
    margin-left: 2vw;
    box-shadow: 0 0 15px rgb(70, 70, 70);
    transition: .5s ease-in-out;
}
.color2 {
    background-color: #ce916a;
}
.color3 {
    background-color: #b5cea8;
}
.color4 {
    background-color: #d7ab4c;
}

.part3 .left .classify .classifyJ img,
.part3 .left .classify .classifyJ .classifyWord {
    margin-top: 1vw;
}

.part3 .left .introduceWord {
    width: 100%;
    text-align: left;
    line-height: 2.2vw;
    text-indent: 3vw;
    overflow: hidden;
    border-radius: 10px;
    padding: 0;
    font-size: 1.2vw;
    letter-spacing: 0.1vw;
    color: #fff;
}
.introduceWord:first-letter {
    font-size: 1.8vw;
    font-weight: bolder;
}

.part3 .right {
    position: relative;
    z-index: 99;
    width: 40%;
    height: 40vw;
    float: left;
}
.part3 .right .introducePic {
    width: 80%;
    height: 40vw;
    margin-left: 15%;
    box-shadow: 0 0 15px rgb(70, 70, 70);
    border-radius: 10px;
    overflow: hidden;
    transition: 1s ease-in-out;
}
.part3 .right .introducePic img {
    width: 100%;
    height: 100%;
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
    box-shadow: 0 0 15px rgb(70, 70, 70);
}
.item {
    width: 80%;
    height: 100%;
    background-color: rgb(95, 177, 159);
    margin-left: 5vw;
    margin-top: 1vw;
    color: #fff;
    font-size: 1.5vw;
    font-weight: 600;
    line-height: 3vw;
    letter-spacing: 0.3vw;
    box-shadow: 0 0 15px rgb(70, 70, 70);
}
.background {
    position: absolute;
    width: 90vw;
    height: 30vw;
    margin-top: 5vw;
    background-color: rgb(70, 76, 88);
    box-shadow: 0 0 15px rgb(70, 70, 70);
    transition: 1s ease-in-out;
    right: 0;
}
.active{
  margin-top: 0vw;
}
</style>
