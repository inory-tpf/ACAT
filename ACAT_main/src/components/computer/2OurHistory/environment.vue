<template>
    <div class="main">
        <div class="box">
            <div class="entryEnv" :class="{ active1: animation }">
                <div class="entryEnvPic">
                    <img
                        src="../../../assets/img/env/entryEnv.jpg"
                        alt="实验室整体环境"
                    />
                </div>
                <div class="zhe"></div>
                <div class="entryEnvWord">
                    <div class="big">整体环境介绍</div>
                    我们实验室位于长安校区西区图书馆b103-2，具有三间房间，宽敞明亮，有空调暖气，冬暖夏凉。满足大家通宵的心愿，不断电，不断网。
                </div>
            </div>
            <div class="detailEnv book" :class="{ active2: animation }">
                <div class="detailEnvPic">
                    <img src="../../../assets/img/env/book.jpg" alt="图书角" />
                </div>
                <div class="detailEnvWord bookWord">
                    <div class="big">图书角</div>
                    拥有丰富的书籍，可以阅读交流学习
                </div>
            </div>
            <div class="detailEnv wifi" :class="{ active2: animation }">
                <div class="detailEnvPic">
                    <img
                        src="../../../assets/img/env/wifi.jpg"
                        alt="wifi 打印机"
                    />
                </div>

                <div class="detailEnvWord wifiWord">
                    <div class="big">基础设施</div>
                    打印机，免费wifi,饮水机等一应俱全
                </div>
            </div>
            <div class="detailEnv table" :class="{ active2: animation }">
                <div class="detailEnvPic">
                    <img src="../../../assets/img/env/table.jpg" alt="桌椅" />
                </div>

                <div class="detailEnvWord tableWord">
                    <div class="big">学习设备</div>
                    宽敞舒服的桌椅，明亮的灯光
                </div>
            </div>
            <div class="introduceEnv" :class="{ active3: animation }">
                <div class="title">这么好的学习环境，你还不心动吗？</div>
                <div class="else">
                    一个好的学习环境是爱上学习的前提，我们实验室环境优美，设施齐全，应有尽有。想象一下，你每天在宽敞明亮的实验室中和一群志同道合的同学交流学习。当然，还有热爱学习的学长学姐陪你一起学习，和他们一起在这里学习成长。<br />实验室未来的发展可就靠你们喽，快点点击上方"加入我们"吧！
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            animation: false,
        };
    },
    methods: {},
    props: ["page"],
    watch: {
        page: function (value) {
            if (value == 2) {
                this.animation = true;
            }
        },
    },
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    font-size: 1.25vw;
    margin-top: 2vw;
}
img {
    width: 100%;
    height: 100%;
    transition: all 1s;
    -moz-transition: all 1s; /* Firefox 4 */
    -webkit-transition: all 1s; /* Safari 和 Chrome */
    -o-transition: all 1s; /* Opera */
}
.box {
    width: 100%;
    height: 100%;
    position: relative;
}
.entryEnv {
    position: absolute;
    top: 5vw;
    left: 10%;
    width: 37%;
    height: 40vw;
    opacity: 0;
    transition: 0.5s ease-in-out;
}

.entryEnvPic {
    width: 100%;
    height: 70%;
    border: 5px solid #464c58;
    box-sizing: border-box;
    overflow: hidden;
}

.entryEnvWord {
    width: 100%;
    height: 30%;
    text-align: left;
    color: #464c58;
    font-weight: lighter;
}

.big {
    font-size: 1.8vw;
    color: #5fb19f;
    font-weight: bolder;
}
.detailEnv {
    position: absolute;
    width: 20%;
    height: 18vw;
    opacity: 0;
    transition: 0.5s 0.4s ease-in-out;
}
.book {
    top: 5vw;
    left: 50%;
}
.wifi {
    top: 5vw;
    left: 75%;
}
.table {
    top: 24vw;
    left: 50%;
}
.detailEnvPic {
    width: 100%;
    height: 70%;
    box-sizing: border-box;
    border: 3px solid #464c58;
    overflow: hidden;
}

.detailEnvWord {
    width: 100%;
    height: 30%;
    text-align: left;
    color: #464c58;
    font-weight: lighter;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.introduceEnv {
    position: absolute;
    top: 22vw;
    left: 75%;
    width: 20%;
    height: 30vw;
    text-align: left;
    opacity: 0;
    transition: 0.5s 0.8s ease-in-out;
}
.introduceEnv .title {
    font-size: 1.8vw;
    color: #5fb19f;
    font-weight: 900;
}
.introduceEnv .else {
    color: #464c58;
    font-weight: lighter;
}
.active1,
.active2,
.active3 {
    opacity: 1;
}
</style>