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
import muban from "./template";
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
                        "&nbsp&nbsp&nbsp&nbspWeb前端开发从网页制作演变而来，网站的前端开发是创建Web页面，或app等前端界面呈现给用户的过程，早期网站主要内容都是静态，以图片和文字为主；现在的前端技术一般分为前端设计和前端开发，前端设计一般可以理解为网站的视觉设计，前端开发则是网站的前台代码实现，包括基本的HTML和CSS以及JavaScript/ajax，最新的高级版本HTML5、CSS3，以及SVG等。",
                    font2: `&nbsp&nbsp&nbsp&nbsp现如今的前端技术栈不断丰富，功能也日益强大</br>1，切图做页面</br>2，写 JS 做交互和功能</br>3，写 NodeJS 程序，部署服务器，抓站搞 api 等</br>4.开发跨平台的桌面端的应用程序与无需安装的快应用</br>5，使用 Vue、React Native 、HTML5 开发移动端 APP`,
                    font3:
                        "&nbsp&nbsp&nbsp&nbsp近些年来，前端随着互联网的火热逐渐发展，现在已经拥有了较为成熟的技术栈，各大公司对前端工程师的需求也是与日俱增。<br/>不仅如此，前端不断更新迭代的技术不断地为其注入新的血液。",
                    pic1: require("../../../assets/img/组别/前端/劈柴.jpg"),
                    pic2_1: require("../../../assets/img/组别/前端/pic5.jpg"),
                    pic2_2: require("../../../assets/img/组别/前端/pic6.png"),
                    pic2_3: require("../../../assets/img/组别/前端/pic2.jpg"),
                    pic3_1: require("../../../assets/img/组别/前端/pic2.jpg"),
                },
                fwd: {
                    id: 2,
                    title1: "服务端",
                    title2: "服务器中的相关操作",
                    font1:
                        "&nbsp&nbsp&nbsp&nbsp广泛而论，只要一切与后台相关即可称为服务端，但服务端与后端不同的地方在于服务端实则是基于Linux/Unix下的socket编程，在计算机网络的传输层和应用层下打交道，而且服务端的定义比后端开发更广泛一些，囊括了整个支撑后台业务的相关组件的开发。",
                    font2:
                        "&nbsp&nbsp&nbsp&nbsp作为实验室的服务端组，掌管着实验室唯二的服务器，在日常可以用这两个服务器进行学习，搭载一些写好的项目和工具。在日常学习中可以学着怎么实现http服务器等。",
                    font3:
                        "&nbsp&nbsp&nbsp&nbsp现在各种各样的云服务(阿里云，腾讯云等)的出现，许多大厂对于服务端岗位有着大量需求，docker，k8s容器云的出现使许多应用程序运行在容器中，需要更多的服务端从业人员。",
                    pic1: require("../../../assets/img/组别/服务端/pic1.png"),
                    pic2_1: require("../../../assets/img/组别/服务端/能做什么（1）.jpg"),
                    pic2_2: require("../../../assets/img/组别/服务端/能做什么(2).jpg"),
                    pic2_3: require("../../../assets/img/组别/服务端/能做什么(3).jpg"),
                    pic3_1: require("../../../assets/img/组别/服务端/发展前景(1).png"),
                    pic3_2: require("../../../assets/img/组别/服务端/发展前景(2).jpg"),
                },

                ht: {
                    id: 3,
                    java: {
                        title1: "JAVA",
                        title2: "Java--全场景编程语言",
                        font1:
                            "&nbsp&nbsp&nbsp&nbspJava是一是门面向对象的编程语言。它作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程。同时具有简单性、面向对象、分布式、平台独立与可移植性、多线程等特点",
                        font2:
                            "1.Web开发</br>&nbsp&nbsp&nbsp&nbspJava在开发高访问、高并发、集群化的大型网站方面有很大的优势，例如淘宝、美团等。<br>2.Android开发</br>&nbsp&nbsp&nbsp&nbspAndroid应用的主要开发语言就是Java。Android发展非常快速，优秀的Android开发工程师仍然存在不小的缺口。<br>3.客户端开发</br>&nbsp&nbsp&nbsp&nbspJava客户端开发主要面向政府和大型企业",
                        font3:
                            "5G技术已经进入人们的视野并且逐渐落地，随之而来的将是万物互联的时代。物联网产业的飞速发展，将带动大数据、云计算、人工智能等领域的蓬勃发展。作为多年坐稳第一编程语言的Java, 以其功能强大、简单易用、安全稳健等特性，让它在这些领域都是风生水起。",
                        pic1: require("../../../assets/img/组别/后台/java/pic2.jpg"),
                        pic2_1: require("../../../assets/img/组别/后台/java/pic3.jpg"),
                        pic2_2: require("../../../assets/img/组别/后台/java/pic4.jpg"),
                        pic2_3: require("../../../assets/img/组别/后台/java/pic5.jpg"),
                        pic3_1: require("../../../assets/img/组别/后台/java/pic7.jpg"),
                        pic3_2: require("../../../assets/img/组别/后台/java/pic6.jpg"),
                    },
                    go: {
                        title1: "GO",
                        title2: "数据处理与逻辑实现",
                        font1: `&nbsp&nbsp&nbsp&nbspgo语言是Google于2009年推出的一门新的系统编程语言</br>
                                &nbsp&nbsp&nbsp&nbsp其特点有：静态编译，垃圾回收，简洁的符号和语法，平坦的类型系统，基于CSP的并发模型，高效简单的工具链以及丰富的标准库。</br>
                                &nbsp&nbsp&nbsp&nbspGo的优点有：编译型语言，运行速度快，静态编译没有依赖，天生支持并发，充分利用多核与大厂支持，有后台`,
                        font2: `1.区块链技术:简称BT</br>
                                &nbsp&nbsp&nbsp&nbsp也被称为分布式账本技术，是一种互联网数据库技术，其特点是去中心化，公开透明，让每个人均可参与数据库记录。</br>
                            2.后端服务器应用:</br>
                                &nbsp&nbsp&nbsp&nbsp吃撑主站后台流量 ,提供负载均衡，cache, 容错，按条件分流，统计运行指标</br>
                            3.云计算/云服务的后台应用：</br>
                                &nbsp&nbsp&nbsp&nbspCDN的调度系统，分发系统，监控系统，短域名服务，CDN内部开放平台，运营报表系统以及其他一些小工具等。`,
                        font3: ` &nbsp&nbsp&nbsp&nbspgolang作为一个自带高并发支持的语言。拥有着众多社区支持，可以在讨论中进步；优秀的开源项目，让你开源借鉴别人的优秀的代码操作；同时在微服务和区块链技术上有着和其他语言所不及的优势。可见其有着良好的学习的环境和未来发展道路。`,
                        pic1: require("../../../assets/img/组别/后台/go/首页.png"),
                        pic2_1: require("../../../assets/img/组别/后台/go/做什么.jpg"),
                        pic2_2: require("../../../assets/img/组别/后台/go/做什么 (2).jpg"),
                        pic2_3: require("../../../assets/img/组别/后台/go/做什么 (3).jpg"),
                        pic3_1: require("../../../assets/img/组别/后台/go/发展前景.jpg"),
                        pic3_2: require("../../../assets/img/组别/后台/java/pic6.jpg"),
                    },
                },
                jqxx: {
                    id: 4,
                    title1: "机器学习",
                    title2: "使机器具有学习智能，解决现实中的各种问题",
                    font1: `&nbsp&nbsp&nbsp&nbsp机器学习是计算机基于数据构建模型并运用模型对数据进行预测与分析的学科。<br>&nbsp&nbsp&nbsp&nbsp机器学习是专门研究计算机怎样模拟或实现人类的学习行为，以获取新的知识或技能，重新组织已有的知识结构使之不断改善自身的性能。<br>&nbsp&nbsp&nbsp&nbsp机器学习是人工智能的核心，从大量现象中提取反复出现的规律与模式，是使计算机具有智能的根本途径。`,
                    font2: `1.数据分析中的机器学习，营销分析，受众研究</br>
                            2.预测分析 - 股票市场预测，市场研究，欺诈预防</br>
                            3.服务个性化 - 推荐引擎，用户建模</br>
                            4.自然语言处理 - 文本生成分析，聊天机器人</br>
                            5.情感分析 - 受众研究，客户服务，处理，建议</br>
                            6.计算机视觉 - 图像识别，视觉搜索，人脸识别</br>
                            7.机器学习语音识别 - 语音到文本，自动字幕</br>`,
                    font3: `1、现在每一家公司都可以成为一家数据公司</br>
                    2、现在每一家公司都可以接触智能算法</br>
                    3、现在每一个应用程序都可以是一个智能应用程序</br>
                    &nbsp&nbsp&nbsp&nbsp机器学习发展前景非常广阔，就业机会也会随着时间的演进逐步增多</br>`,
                    pic1: require("../../../assets/img/组别/机器学习/图片2.png"),
                    pic2_1: require("../../../assets/img/组别/机器学习/图片3.png"),
                    pic2_2: require("../../../assets/img/组别/机器学习/图片4.png"),
                    pic2_3: require("../../../assets/img/组别/机器学习/图片5.png"),
                    pic3_1: require("../../../assets/img/组别/机器学习/图片7.png"),
                    pic3_2: require("../../../assets/img/组别/机器学习/图片6.png"),
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
    background-color: #ebeeee;
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