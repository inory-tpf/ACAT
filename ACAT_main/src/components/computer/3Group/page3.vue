<template>
    <div class="main">
        <nav_2></nav_2>
        <div class="pages">
            <lineNav @msg="moveto" ref="linenav"></lineNav>
            <div class="page" :id="5" ref="id5">
                <muban ref="move4" :msg="msg.jqxx"></muban>
            </div>
            <div class="page" :id="4" ref="id4">
                <muban ref="move3" :msg="msg.ht"></muban>
            </div>
            <div class="page" :id="3" ref="id3">
                <muban ref="move2" :msg="msg.fwd"></muban>
            </div>
            <div class="page" :id="2" ref="id2">
                <muban ref="move1" :msg="msg.qd"></muban>
            </div>
            <div class="page page1" :id="1" ref="id1">
                <why @pagevalue="moveto2"></why>
            </div>
        </div>
    </div>
</template>
<script>
import nav_2 from "../public/nav_2";
import lineNav from "./lineNav";
import muban from "./muban";
import why from "./why";
export default {
    data() {
        return {
            id: 1,
            line: true,
            pre: "",
            msg: {
                qd: {
                    id: 1,
                    title1: "前端",
                    title2: "技术的可视化展示窗口",
                    font1:
                        "Web前端开发从网页制作演变而来，网站的前端开发是创建Web页面，或app等前端界面呈现给用户的过程，早期网站主要内容都是静态，以图片和文字为主；现在的前端技术一般分为前端设计和前端开发，前端设计一般可以理解为网站的视觉设计，前端开发则是网站的前台代码实现，包括基本的HTML和CSS以及JavaScript/ajax，最新的高级版本HTML5、CSS3，以及SVG等。",
                    font2:
                        "这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字",
                    font3:
                        "这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字",
                    pic1: require("../../../assets/img/组别/前端/pic1.jpg"),
                    pic2_1: require("../../../assets/img/组别/前端/pic2.jpg"),
                    pic2_2: require("../../../assets/img/组别/前端/pic2.jpg"),
                    pic2_3: require("../../../assets/img/组别/前端/pic2.jpg"),
                },
                fwd: {
                    id: 2,
                    title1: "服务端",
                    title2: "服务器中的相关操作",
                    font1:
                        "这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字",
                    font2:
                        "这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字",
                    font3:
                        "这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字",
                },
                ht: {
                    id: 3,
                    java: {
                        title1: "JAVA",
                        title2: "Java--全场景编程语言",
                        font1:
                            "Java是一是门面向对象的编程语言。它作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程。同时具有简单性、面向对象、分布式、平台独立与可移植性、多线程等特点",
                        font2:
                            "Java拥有很多用途<br>1.Web开发</br>Java在开发高访问、高并发、集群化的大型网站方面有很大的优势，例如淘宝、美团等。<br>2.Android开发</br>Android应用的主要开发语言就是Java。Android发展非常快速，优秀的Android开发工程师仍然存在不小的缺口。<br>3.客户端开发</br>Java客户端开发主要面向政府和大型企业",
                        font3:
                            "5G技术已经进入人们的视野并且逐渐落地，随之而来的将是万物互联的时代。物联网产业的飞速发展，将带动大数据、云计算、人工智能等领域的蓬勃发展。作为多年坐稳第一编程语言的Java, 以其功能强大、简单易用、安全稳健等特性，让它在这些领域都是风生水起。",
                        pic1: require("../../../assets/img/组别/后台/java/pic2.jpg"),
                        pic2_1: require("../../../assets/img/组别/后台/java/pic3.jpg"),
                        pic2_2: require("../../../assets/img/组别/后台/java/pic4.jpg"),
                        pic2_3: require("../../../assets/img/组别/后台/java/pic5.jpg"),
                    },
                    go: {
                        title1: "GO",
                        title2: "数据处理与逻辑实现",
                        font1:
                            "这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字",
                        font2:
                            "这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字",
                        font3:
                            "这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字",
                    },
                },
                jqxx: {
                    id: 4,
                    title1: "机器学习",
                    title2: "人工智能与数据挖掘",
                    font1:
                        "这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字",
                    font2:
                        "这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字",
                    font3:
                        "这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字",
                },
            },
        };
    },
    components: {
        nav_2,
        lineNav,
        why,
        muban,
    },
    methods: {
        moveto(msg) {
            this.pre = msg.pre;
            this.id = msg.value;
        },
        moveto2(value) {
            this.pre = 1;
            this.id = value;
            this.$refs.linenav.changenowpage(value);
        },
    },
    watch: {
        id(value) {
            this.$refs["id" + value].style.zIndex = "99";
            this.$refs["id" + value].style.marginTop = "0vh";
            for (let i = 1; i < value; i++) {
                this.$refs["id" + i].style.zIndex = "10";
                setTimeout(() => {
                    this.$refs["id" + i].style.marginTop = "-180vh";
                }, 1200);
            }
            for (let i = value + 1; i <= 5; i++) {
                this.$refs["id" + i].style.zIndex = "10";
                setTimeout(() => {
                    this.$refs["id" + i].style.marginTop = "-180vh";
                }, 1200);
            }
        },
        pre(value) {
            if (value != 1) {
                this.$refs["move" + (value - 1)].changepage();
            }
        },
    },
};
</script>
<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.pages {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
.page {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgb(235, 238, 238);
    color: black;
    font-size: 10vw;
    margin-top: -180vh;
    transition: 1.2s ease-in-out;
    box-shadow: 0 0 15px rgb(0, 0, 0);
}
.page1 {
    margin-top: 0;
}
</style>